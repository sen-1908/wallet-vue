<script setup>
import { useRoute } from 'vue-router'
import getItem from '../components/GetItem.vue'

const items = getItem()
console.log(items.values)
const route = useRoute()
const itemName = route.params.name

let totalAmount = 0
const addAmount = (e) => {
  totalAmount += e
}

</script>

<template>
  <div>
    <div>
      <table class="my-10 m-auto border w-9/12">
        <tr class="border bg-green-300">
          <th class="text-left">項目</th>
          <th class="text-left">金額</th>
          <th class="text-left">補足</th>
        </tr>
        <tr v-for="item in items.values" :key="item.id" class=" m-2 ">
          <template v-if="item.name == itemName" >
            <td class="text-left">{{ item.name}}</td>
            <td class="text-left">{{ item.money.toLocaleString() }}</td>
            <td class="text-left">{{ item.appendix }}</td>
            {{ addAmount(item.money) }}
          </template>
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
