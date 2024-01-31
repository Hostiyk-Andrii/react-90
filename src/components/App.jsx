import { GlobalStyle } from './GlobalStyle';
import { SearchBar } from './SearchBar';
import { QuizList } from './QuizList/QuizList';
import toast, { Toaster } from 'react-hot-toast';
import { QuizForm } from './QuizForm/QuizForm';
import { useEffect, useState } from 'react';
import { addNewQuiz, deleteQuizById, fetchQuizzes } from './api';

const intialFilters = {
  topic: '',
  level: 'all',
};

const localStorageKey = 'quiz-filters';

export const App = () => {
  const [quizItems, setQuizItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [filters, setFilterst] = useState(intialFilters);

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
  const addQuiz = async newQuiz => {
    try {
      setIsLoading(true);
      setError(false);
      setQuizItems(prevState => [...prevState.quizItems, addedQuiz]);
      const addedQuiz = await addNewQuiz(newQuiz);
    } catch (error) {
      toast.error('ERROR ADDING QUIZ');
    } finally {
      setIsLoading(false);
    }
  };
  const deleteQuiz = async quizId => {
    try {
      setIsLoading(true);
      const deletedQuiz = await deleteQuizById(quizId);
      setQuizItems(prevItems =>
        prevItems.filter(item => item.id !== deletedQuiz.id)
      );
    } catch (error) {
      toast.error('ERROR ADDING QUIZ');
    } finally {
      setIsLoading(false);
    }
  };
  const updateTopicFilter = newTopic => {
    setFilterst(prevFilters => ({ ...prevFilters, topic: newTopic }));
  };
  const updateLevelFilter = newLevel => {
    setFilterst(prevFilters => ({ ...prevFilters, level: newLevel }));
  };
  const resetFilters = () => {
    setFilterst(intialFilters);
  };
  useEffect(() => {
    async function getQuizzes() {
      try {
        setIsLoading(true);
        setError(false);
        const initialQuizzes = await fetchQuizzes();
        setQuizItems(initialQuizzes);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getQuizzes();
  }, []);
  useEffect(()=>{window.localStorage.setItem(localStorageKey, JSON.stringify(filters))},[filters])
  return (
    <div>
      <QuizForm onAdd={addQuiz} />
      <SearchBar
        filters={filters}
        onUpdateTopic={updateTopicFilter}
        onUpdateLevel={updateLevelFilter}
        onReset={resetFilters}
      />
      {isLoading && <b>Loading......</b>}
      {error && <b>Oops!</b>}

      {quizItems.length > 0 && (
        <QuizList items={visibleQuizItems} onDelete={deleteQuiz} />
      )}
      <Toaster />
      <GlobalStyle />
    </div>
  );
};
// export class App extends Component {
//   state = {
//     quizItems: [],
//     isLoading: false,
//     error: false,
//     filters: {
//       topic: '',
//       level: 'all',
//     },
//   };
//   async componentDidMount() {
//     const savedFilters = localStorage.getItem(localStorageKey);
//     if (savedFilters !== null) {
//       const filters = JSON.parse(savedFilters);
//       this.setState({ filters });
//     }
//     try {
//       this.setState({ isLoading: true, error: false });
//       const initialQuizzes = await fetchQuizzes();
//       this.setState({ quizItems: initialQuizzes });
//     } catch (error) {
//       this.setState({ error: true });
//     } finally {
//       this.setState({ isLoading: false });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.filters !== this.state.filters) {
//       localStorage.setItem(localStorageKey, JSON.stringify(this.state.filters));
//     }
//   }
