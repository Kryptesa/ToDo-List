import Axios from 'axios';

/* eslint no-shadow: ["error", { "allow": ["state"] }] */

const state = {
  todos: [],
};

const getters = {
  allTodos: state => state.todos,
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await Axios.get('https://jsonplaceholder.typicode.com/todos');

    commit('setTodos', response.data);
  },
  async addTodo({ commit }, title) {
    const response = await Axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed: false });

    commit('newTodo', response.data);
  },
  async deleteTodo({ commit }, id) {
    await Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

    commit('deleteTodo', id);
  },
  async updateTodo({ commit }, updTodo) {
    await Axios.put(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`, updTodo);

    commit('updateTodo', updTodo);
  },
};

const mutations = {
  setTodos(state, todos) {
    state.todos = todos;
  },
  newTodo(state, todo) {
    state.todos.unshift(todo);
  },
  deleteTodo(state, id) {
    state.todos = state.todos.filter(todo => todo.id !== id);
  },
  updateTodo(state, updTodo) {
    const index = state.todos.findIndex(todo => todo.id === updTodo.id);

    if (index !== -1) {
      state.todos.splice(index, 1, updTodo);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
