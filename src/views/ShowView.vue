<script setup>
import { useRoute } from 'vue-router'
import getItem from '../components/GetItem.vue'

const items = getItem()
const route = useRoute()
const userId = route.params.id - 1
</script>

<template>
  <div v-if="items.values">
    <div class="flex justify-center ">
      <div class="max-w-sm rounded overflow-hidden shadow-lg m-2 ">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">
           <p>{{ items.values[userId].itemName }}</p>
          </div>
          <p class="text-gray-700 text-base">
            {{ items.values[userId].itemCategory }}
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <router-link :to="{ name: 'edit', params: { id: route.params.id } }" class="text-blue-500">edit</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
