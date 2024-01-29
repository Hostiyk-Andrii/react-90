import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { SearchBar } from './SearchBar';
import { nanoid } from 'nanoid';
import { QuizList } from './QuizList/QuizList';
import { QuizForm } from './QuizForm/QuizForm';
import { fetchQuizzes } from './api';

const licalStorageKey = 'quiz-filters';

export class App extends Component {
  state = {
    quizItems: [],
    isLoading: false,
    filters: {
      topic: '',
      level: 'all',
    },
  };
  async componentDidMount() {
    const savedFilters = localStorage.getItem(licalStorageKey);
    if (savedFilters !== null) {
      const filters = JSON.parse(savedFilters);
      this.setState({ filters });
    }
    try {
      this.setState({ isLoading: true });
      const initialQuizzes = await fetchQuizzes();
      this.setState({ quizItems: initialQuizzes });
    } catch (error) {
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.filters !== this.state.filters) {
      localStorage.setItem(licalStorageKey, JSON.stringify(this.state.filters));
    }
  }
  updateTopicFilter = newTopic => {
    this.setState(prevState => ({
      filters: {
        ...prevState.filters,
        topic: newTopic,
      },
    }));
  };
  updateLevelFilter = newLevel => {
    this.setState(prevState => ({
      filters: {
        ...prevState.filters,
        level: newLevel,
      },
    }));
  };
  resetFilters = () => {
    this.setState({
      filters: {
        topic: '',
        level: 'all',
      },
    });
  };
  deleteQuiz = quizId => {
    console.log('Delete', quizId);
    this.setState(prevState => {
      return {
        quizItems: prevState.quizItems.filter(item => item.id !== quizId),
      };
    });
  };
  addQuiz = newQuiz => {
    const quiz = {
      ...newQuiz,
      id: nanoid(),
    };
    this.setState(prevState => ({
      quizItems: [...prevState.quizItems, quiz],
    }));
  };
  render() {
    const { quizItems, filters,isLoading } = this.state;
    const visibleQuizItems = quizItems.filter(item => {
      const hasTopic = item.topic
        .toLowerCase()
        .includes(filters.topic.toLowerCase());
      if (filters.level === 'all') {
        return hasTopic;
      }
      const matchesLevel = item.level === filters.level;
      return hasTopic && matchesLevel;
    });
    return (
      <div>
        <QuizForm onAdd={this.addQuiz} />
        <SearchBar
          filters={filters}
          onUpdateTopic={this.updateTopicFilter}
          onUpdateLevel={this.updateLevelFilter}
          onReset={this.resetFilters}
        />
        {isLoading && <b>Loading......</b>}
        {quizItems.length > 0 && (
          <QuizList items={visibleQuizItems} onDelete={this.deleteQuiz} />
        )}

        <GlobalStyle />
      </div>
    );
  }
}
