<template>
  <div id="app" class="container">
    <todo-list></todo-list>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoList,
  }
}
</script>


<style>
.container {
  max-width: 600px;
  margin: 0 auto;
}
</style>
