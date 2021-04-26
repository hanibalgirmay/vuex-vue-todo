const axios = require("axios").default;

// import axios from "axios";

const state = {
  todos: [],
};

const getters = {
  allTodos: (state) => state.todos,
};

const actions = {
  // eslint-disable-next-line no-unused-vars
  async fetchPost({ commit }) {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    commit("setTodos", res.data);
  },

  async addTodo({ commit }, title) {
    const res = await axios.post(
        "https://jsonplaceholder.typicode.com/todos", 
        { title, completed: false }
      );

    commit("newTodo", res.data);
  },
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
