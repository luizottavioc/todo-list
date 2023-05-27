<template>
  <div class="app">
    <ProgressBar />
    <AddTodo />
    <TodoList />
  </div>
</template>

<script>
import ProgressBar from './components/ProgressBar.vue';
import AddTodo from './components/AddTodo.vue';
import TodoList from './components/TodoList.vue';

export default {
  components: {
    ProgressBar,
    AddTodo,
    TodoList
  },
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

.app {
  height: 100vh;
  width: 100%;
  background-color: #21D4FD;
  background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%); 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
}

</style>
