<template>
     <div>
        <button id="clear" v-if="showClearCompletedButton" @click="clearCompleted">Удалить выполненные</button>
    </div>
</template>

<script>
export default {
    name: 'todo-completed',
    computed: {
        showClearCompletedButton() {
            return this.$store.getters.showClearCompletedButton
        }
    },
    methods: {
        clearCompleted() {
            this.$store.dispatch('clearCompleted');
        }
    }


}
</script>

<style>
#clear {
    /* width: 200px; */
    padding: 1em;
    border-radius: 10px;
    background: rgba(255, 0, 0, 0.4);
    margin-right: 1em;
}

#clear:hover {
    background: grey;
    color: white;
}
</style>
