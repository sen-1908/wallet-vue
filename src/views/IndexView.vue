<script setup>
import axios from 'axios'
import getItem from '../components/GetItem.vue'
import { ref } from 'vue'

const reder = ref(0)
const items = getItem()
console.log(items)
let totalAmount = 0
const addAmount = (e) => {
  totalAmount += e
}

const deletePost = (e) => {
  const path = 'http://localhost:8888/' + e
  if (window.confirm('本当に削除してもよろしいでしょうか')) {
    axios.delete(path, e)
      .then(responce => {
        console.log(e)
        reder.value += 1
      })
      .catch(error => {
        console.log(error)
      })
  }
}

</script>

<template>
  <div>
    <div>
      <table class="my-10 m-auto border w-9/12">
        <tr class="border bg-green-300">
          <th class="text-left">項目</th>
          <th class="text-left">金額/円</th>
          <th class="text-left">補足</th>
          <th class="text-center">編集</th>
        </tr>
        <tr v-for="item in items.values" :key="item.id" class=" m-2 ">
            <td class="text-left cursor-auto hover:text-green-400">
              <router-link :to="{ name: 'show', params: { name: item.name } }">{{ item.name }}</router-link>
            </td>
            <td class="text-left">{{ item.money.toLocaleString() }}</td>
            <td class="text-left">{{ item.appendix }}</td>
            <td class="flex justify-around">
              <button class="text-red-500" @click="deletePost(item.id)">削除</button>
            </td>
          {{ addAmount(item.money)}}
        </tr>
        <tr class="border">
          <td class="text-left">合計金額</td>
          <td class="text-left">{{ totalAmount.toLocaleString() }}</td>
          <td></td>
        </tr>
      </table>
    </div>
  </div>
</template>
