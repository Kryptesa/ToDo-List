<template>
  <div class='todos row justify-center q-gutter-sm'>
    <div class='todo column ' v-for='todo in allTodos' :key='todo.id' >
      {{ todo.title }}
      <div class="edit-todo ">
        <i class="fas fa-check fa-lg" @click="completeTodo(todo.id)"></i>
        <i class="fas fa-pencil-alt fa-lg" @click="prompt(todo)"></i>
        <i class="fas fa-trash-alt fa-lg" @click="deleteTodo(todo.id)"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Todos',
  data() {
    return {
      title: '',
    };
  },
  methods: {
    ...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo', 'completeTodo']),
    prompt(todo) {
      this.$q.dialog({
        title: 'New ToDo title',
        prompt: {
          model: '',
          type: 'text', // optional
        },
        cancel: true,
        persistent: true,
      }).onOk((data) => {
        this.updateTodo({
          userId: todo.userId,
          id: todo.id,
          title: data,
          completed: todo.completed,
        });
      });
    },
  },
  computed: {
    ...mapGetters(['allTodos']),
  },
  created() {
    this.fetchTodos();
  },
};
</script>

<style scoped>
.todo {
  border: 1px solid #ccc;
  font-weight: bold;
  background: #26a69a;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  width: 200px;
  min-width: 110px;
  justify-content: space-between;
}
.edit-todo {
  display: flex;
  justify-content: space-around;
  color: white;
  margin-top: 0.5rem;
}
i {
  cursor: pointer;
}
</style>
