<template>
  <q-form @submit="onSubmit" class="row justify-center" >
    <q-input v-model="title" outlined label="Add ToDo..." />
    <q-btn type="submit" color="primary" label="Submit" />
  </q-form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AddTodo',
  data() {
    return {
      title: '',
    };
  },
  methods: {
    ...mapActions(['addTodo']),
    onSubmit() {
      this.addTodo(this.title);
      this.title = '';
    },
  },
};
</script>

<style scoped>

</style>
