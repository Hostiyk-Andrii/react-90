import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { SearchBar } from './SearchBar';
import { QuizList } from './QuizList/QuizList';
import toast, { Toaster } from 'react-hot-toast';
import { QuizForm } from './QuizForm/QuizForm';
import { addNewQuiz, deleteQuizById, fetchQuizzes } from './api';
//dfstgsdfjtgkersatpokarwe
const localStorageKey = 'quiz-filters';

export class App extends Component {
  state = {
    quizItems: [],
    isLoading: false,
    error: false,
    filters: {
      topic: '',
      level: 'all',
    },
  };
  async componentDidMount() {
    const savedFilters = localStorage.getItem(localStorageKey);
    if (savedFilters !== null) {
      const filters = JSON.parse(savedFilters);
      this.setState({ filters });
    }
    try {
      this.setState({ isLoading: true, error: false });
      const initialQuizzes = await fetchQuizzes();
      this.setState({ quizItems: initialQuizzes });
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.filters !== this.state.filters) {
      localStorage.setItem(localStorageKey, JSON.stringify(this.state.filters));
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
  deleteQuiz = async quizId => {
    try {
      this.setState({ isLoading: true });
      const deletedQuiz = await deleteQuizById(quizId);
      this.setState(prevState => {
        return {
          quizItems: prevState.quizItems.filter(
            item => item.id !== deletedQuiz.id
          ),
        };
      });
    } catch (error) {toast.error("ERROR ADDING QUIZ")
    } finally {
      this.setState({ isLoading: false });
    }
  };

  addQuiz = async newQuiz => {
    try {
      this.setState({ isLoading: true, error: false });
      const addedQuiz = await addNewQuiz(newQuiz);
      this.setState(prevState => {
        return {
          quizItems: [...prevState.quizItems, addedQuiz],
        };
      });
    } catch (error) {
      toast.error("ERROR ADDING QUIZ")
    } finally {
      this.setState({ isLoading: false });
    }
  };
  render() {
    const { quizItems, filters, isLoading, error } = this.state;
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
        {error && <b>Oops!</b>}

        {quizItems.length > 0 && (
          <QuizList items={visibleQuizItems} onDelete={this.deleteQuiz} />
        )}
        <Toaster />
        <GlobalStyle />
      </div>
    );
  }
}
