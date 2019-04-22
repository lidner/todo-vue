<template>
  <div class="home container">
    <img alt="Vue logo" class="logo" src="../assets/logo.png">
    <todo-list></todo-list>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TodoList from '@/components/TodoList.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    TodoList
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

.container {
  max-width: 600px;
  margin: 0 auto;
}

.logo {
  display: block;
  margin: 20px auto;
  height: 75px;
}
</style>

