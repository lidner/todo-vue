<template>
    <div>
        <button id="all" :class="{ active: filter == 'all' }" @click="changeFilter('all')">Все</button>
        <button id="active" :class="{ active: filter == 'active' }" @click="changeFilter('active')">Активные</button>
        <button id="completed" :class="{ active: filter == 'completed' }" @click="changeFilter('completed')">Выполненные</button>
    </div>
</template>

<script>
export default {
    name: 'todo-filtered',
    computed: {
        filter() {
            return this.$store.state.filter
        }
    },
    methods: {
        changeFilter(filter) {
            this.$store.dispatch('updateFilter', filter)
        }
    }
}
</script>

<style>
#all {
    width: 100px;
    padding: 1em;
    border-radius: 10px;
    background: #dfdfdf;
    margin-right: 1em;
}

#all:hover {
    background: grey;
    color: white;
}

#active {
    width: 100px;
    padding: 1em;
    border-radius: 10px;
    background: #ddd835;
    margin-right: 1em;
}

#active:hover {
    background: grey;
    color: white;
}

#completed {
    width: 150px;
    padding: 1em;
    border-radius: 10px;
    background: #17820f
}

#completed:hover {
    background: grey;
    color: white;
}
</style>
