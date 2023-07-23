let token = null;

const STORAGE_KEY = 'skillCollectorUser';

export const setUser = (user) => {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  token = user.token;
};

export const getUser = () => {
  const loggedUserJSON = window.localStorage.getItem(STORAGE_KEY);
  if (loggedUserJSON) {
    const user = JSON.parse(loggedUserJSON);
    token = user.token;
    return user;
  }
  return null;
};
export const clearUser = () => {
  localStorage.clear();
  token = null;
};

export const getToken = () => token;
