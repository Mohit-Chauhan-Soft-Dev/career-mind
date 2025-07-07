import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8080/api',
});

export const analyzeResume = (formData) => API.post('/resume/analyze', formData);
export const sendChatMessage = (message) => API.post('/chatbot', { message });