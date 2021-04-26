<template>
  <div>
    <h3>Todo</h3>
    <div class="todos">
      <div v-for="todo in allTodos" v-bind:key="todo.id" class="todo">
        {{ todo.title }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Todo",
  methods: {
    ...mapActions(["fetchPost"]),
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchPost();
  },
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  padding: 1rem;
  background: #41b884;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  position: relative;
}
</style>
