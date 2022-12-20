<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import IndexViewVue from './IndexView.vue'

console.log(IndexViewVue)
const route = useRoute()
const userId = ref(route.params.id)
</script>

<template>
  <p>{{ route.params.id }}</p>
  <p>{{ userId }}</p>
</template>
