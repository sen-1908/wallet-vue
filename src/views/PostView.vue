<script setup>
import axios from 'axios'
import { ref } from 'vue'

const itemName = ref('')
const itemCategory = ref('')
const itemId = ref(1)

const addItem = () => {
  const path = 'http://localhost:8888/items'
  const item = {
    itemId: itemId.value,
    itemName: itemName.value,
    itemCategory: itemCategory.value
  }
  console.log(item)
  axios.post(path, item)
    .then(responce => {
      console.log(item)
    })
    .catch(error => {
      console.log(item)
      console.log(error)
    })
  itemId.value = itemId.value + 1
}
</script>

<template>
<div class="w-full max-w-xs m-auto ">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Item Name
      </label>
      <input v-model="itemName" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Apple">
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Item Category
      </label>
      <input v-model="itemCategory" class="shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Fruts">
    </div>
    <div>
      <router-link to="/" class="text-red-500">
        <button @click="addItem" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-auto" type="button">
          Create
        </button>
    </router-link>
    </div>
  </form>
</div>
</template>
