<template>
  <div>
    <main class="main-content">
      <div class="add-todo">
        <input v-model="newTodo" placeholder="TODOを入力してください" @keyup.enter="addTodo" />
        <button @click="addTodo">追加</button>
      </div>

      <ul class="todo-list">
        <li v-for="(todo, index) in todos" :key="index" :class="{ done: todo.done }">
          <input type="checkbox" v-model="todo.done" />
          <span>{{ todo.text }}</span>
          <button @click="removeTodo(index)">削除</button>
        </li>
      </ul>
    </main>
  </div>
</template>

<script setup lang="ts">
// definePageMeta({
//   layout: 'simple'
// })
const newTodo = ref<string>('')
const todos = ref<{ text: string; done: boolean }[]>([])

const addTodo = () => {
  if (newTodo.value.trim() !== '') {
    todos.value.push({ text: newTodo.value, done: false })
    newTodo.value = ''
  }
}

const removeTodo = (index: number) => {
  todos.value.splice(index, 1)
}
</script>

<style>
.main-content {
  margin-top: 80px;
  padding: 20px;
}

.add-todo {
  display: flex;
  gap: 10px;
}

.add-todo input {
  flex: 1;
  padding: 10px;
}

.todo-list {
  list-style-type: none;
  padding: 0;
}

.todo-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.todo-list li.done span {
  text-decoration: line-through;
  color: gray;
}

.todo-list button {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

.todo-list button:hover {
  background-color: #d32f2f;
}
</style>
