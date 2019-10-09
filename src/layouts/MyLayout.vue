<template>
  <q-layout view="lHh lpr lFf" container style="height: 1200px">
    <q-header bordered class="bg-white text-primary">
        <q-toolbar>
          <q-toolbar-title class="text-center">
            <q-avatar>
              <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
            </q-avatar>
            ToDo List
          </q-toolbar-title>
        </q-toolbar>
      </q-header>
    <q-page-container>
        <q-page class="q-pa-md">
          <AddTodo />
          <Todos />
        </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  components: {
    Todos: () => import('../components/Todos.vue'),
    AddTodo: () => import('../components/AddTodo.vue'),
  },

  data() {
    return {
      leftDrawerOpen: false,
    };
  },
};
</script>
