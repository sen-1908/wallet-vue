<script setup>
import getItem from '../components/GetItem.vue'
const items = getItem()
console.log(items)
</script>

<template>
  <div>
    <div class="flex justify-center flex-wrap">
      <div v-for="item in items.values" :key="item.id" class="max-w-sm rounded overflow-hidden shadow-lg m-2 ">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">
            <router-link :to="{ name: 'show', params: { id: item.itemId } }">{{ item.itemName }}</router-link>
          </div>
          <p class="text-gray-700 text-base">
            {{ item.itemCategory }}
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <router-link to="/" class="text-red-500">Destroy</router-link>
        </div>
      </div>
    </div>
  </div>

</template>
