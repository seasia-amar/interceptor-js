import axios from 'axios'
import { defineStore } from 'pinia'


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
      console.log(data, "daskdas")
      try {
        // Use the `await` keyword inside an async function
        const response = await axios.post('https://62e10ae3fa99731d75cc32ce.mockapi.io/books/store',data);
        return { message: 'User Created', response };
      } catch (error) {
        throw error;
      }
    },
  },
});