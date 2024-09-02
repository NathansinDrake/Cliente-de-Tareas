import axios from "axios";

// Define la URL base para las solicitudes
const API_URL = 'http://localhost:8000/tasks/api/tasks/';

// Crea una instancia de Axios con la URL base
const tasksApi = axios.create({
    baseURL: API_URL,
});

// Exporta las funciones de la API
export const getAllTasks = () => {
    return tasksApi.get('/');
};

export const getTask = (id) => {
    return tasksApi.get(`/${id}/`);
};

export const createTask = (task) => {
    return tasksApi.post('/', task);
};

export const updateTask = (id, task) => {
    return tasksApi.patch(`/${id}/`, task);
};

export const deleteTask = (id) => {
    return tasksApi.delete(`/${id}/`);
};
