export const TOKEN_KEY = "1A2b3C";
export const isAuthenticated = () => window.localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => window.localStorage.getItem(TOKEN_KEY);
export const setToken = () => window.localStorage.setItem("token", TOKEN_KEY);
export const removeToken = () => window.localStorage.clear();