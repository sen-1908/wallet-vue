<script setup>
import axios from 'axios'
import { onBeforeMount, reactive } from 'vue'

const items = reactive({})
onBeforeMount(() => {
  const path = 'http://localhost:8888/items'
  axios.get(path)
    .then(response => {
      items.values = response.data
    })
    .catch(error => {
      console.log(error)
    })
})
</script>

<template>
  <div>

    <li v-for="item in items.values" :key="item.id">
      <router-link to="/">{{ item.itemName }}</router-link>
      <router-link to="/about"><button>destory</button></router-link>
    </li>
  </div>

</template>
