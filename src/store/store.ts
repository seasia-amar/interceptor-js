import axios from 'axios'
import { defineStore } from 'pinia'
import api from './api.ts'



export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      console.log("hittt")
      this.count++
    },
    decrement() {
      this.count--
    }
  }
})


export const addUsers = defineStore({
  id: 'create users',
  state: () => ({
    message: "",
    error: "",
    loading: "",
  }),
  actions: {
    async handleCreateUser(data) {
      try {
        // Use the `await` keyword inside an async function
        const response = await api.post('register',data);
        return { message: 'User Created', response };
      } catch (error) {
        throw error;
      }
    },
  },
});

export const loginUser=defineStore({
  id:"login user",
  state: () => ({
    message: "",
    error: "",
    loading: "",
  }),
  actions: {
    async handleloginUser(data) {
      try {
        // Use the `await` keyword inside an async function
        const response = await api.post('login',data);
        return { message: 'User Created', response };
      } catch (error) {
        throw error;
      }
    },
  },
})