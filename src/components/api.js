import axios from 'axios';
axios.defaults.baseURL = 'https://65b4da4e41db5efd28670709.mockapi.io';

export const fetchQuizzes = async () => {
      const response = await axios.get('/quiz');
      return response.data;
}

export const addNewQuiz = async newQuiz =>{
      const response = await axios.post ('/quiz',newQuiz);
      return response.data;
};

export const deleteQuizById= async quizId =>{
      const response = await axios.delete(`/quiz/${quizId} `);
      return response.data;
};
