import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: []
  }),
  getters: {
    taskCount: (state) => state.tasks.length
  },
  actions: {
    addTask(task) {
      this.tasks.push(task);
    },
    removeTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id);
    }
  }
});