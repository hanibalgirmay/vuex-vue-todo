<template>
  <div id="app">
    <div class="container">
      <AddTodo />
      <Todo />
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Todo from "./components/Todo";
import AddTodo from './components/AddTodo'

export default {
  name: "App",
  components: {
    Todo,
    AddTodo
  },
};
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
