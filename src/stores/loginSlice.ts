import { StateCreator } from 'zustand';
import { LoginSlice } from './types';
import { login } from '../services/login';
import { saveUser, removeUser, loadUser } from '../services/storage';
import { User } from '../types/types';

const initialLogged = false;
const initialUser = null;

export const logInSlice: StateCreator<LoginSlice, [], [], LoginSlice> = (set) => ({
  isLoggedIn: initialLogged,
  user: initialUser,
  login: async (hashkey: string) => {
    try {
      const authUser = await login(hashkey);

      saveUser(authUser);
      return set({ isLoggedIn: true, user: authUser });
    } catch (error) {
      console.log(error);
    }
  },
  logout: async () => {
    set({ isLoggedIn: initialLogged, user: initialUser });
    removeUser();
  },
  initUser: async () => {
    const user: User = await loadUser();
    if (user) {
      set({ user: user, isLoggedIn: true });
    }
  },
});
