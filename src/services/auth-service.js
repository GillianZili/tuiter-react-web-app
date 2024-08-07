import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE || "https://tuiter-node-server-app-ivbu.onrender.com/api"
console.log(API_BASE);
const USERS_URL = `${API_BASE}/users`;
const api = axios.create({ withCredentials: true });
export const login = async ({ username, password }) => {
    const response = await api.post(`${USERS_URL}/login`, {
        username,
        password,
    });
    const user = response.data;
    return user;
};

export const logout = async () => {
    const response = await api.post(`${USERS_URL}/logout`);
    return response.data;
};

export const profile = async () => {
    const response = await api.post(`${USERS_URL}/profile`);
    return response.data;
};

export const updateUser = async (user) => {
    const response = await api.put(`${USERS_URL}`, user);
    return response.data;
};

export const register = async ({ username, password }) => {
    const response = await api.post(`${USERS_URL}/register`, { username, password });
    return response.data;
};















