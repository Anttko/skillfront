const KEY = 'skillCollectorUser';

import { User } from '../types/types';
export const saveUser = (user: User): void => {
  localStorage.setItem(KEY, JSON.stringify(user));
};

export const loadUser = (): User | null => {
  const user = JSON.parse(window.localStorage.getItem(KEY));

  return user ?? null;
};

export const removeUser = (): void => {
  localStorage.removeItem(KEY);
};
