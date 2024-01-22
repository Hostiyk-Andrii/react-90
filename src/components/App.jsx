import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import items from './quiz-items.json';
import { SearchBar } from './SearchBar';
import { QuizList } from './QuizList/QuizList';
;

export class App extends Component {
  state = {
    quizItems: items,
    filters: {
      topic: '',
      level: 'all',
    },
  };
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
  render() {
    const { quizItems, filters } = this.state;
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
       
        <SearchBar
          filters={filters}
          onUpdateTopic={this.updateTopicFilter}
          onUpdateLevel={this.updateLevelFilter}
          onReset={this.resetFilters}
        />
        {quizItems.length > 0 && (
          <QuizList items={visibleQuizItems} onDelete={this.deleteQuiz} />
        )}

        <GlobalStyle />
      </div>
    );
  }
}
