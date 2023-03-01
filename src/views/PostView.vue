<script setup>
import axios from 'axios'
import { ref } from 'vue'

const name = ref('')
const money = ref('')
const appendix = ref('')
const isShow = ref(false)
const isFail = ref(false)

const addItem = () => {
  const path = 'http://localhost:8888/'
  const item = {
    name: name.value,
    money: money.value,
    appendix: appendix.value
  }
  console.log(item)
  if (name.value !== '' && money.value !== '' && money.value > 500) {
    axios.post(path, item)
      .then(responce => {
        console.log(item)
      })
      .catch(error => {
        console.log(error)
      })
    isShow.value = true
    console.log(isShow.value)
  } else {
    console.log('失敗')
    isFail.value = true
    isShow.value = false
  }
}
</script>

<template>
  <div>
    <div v-show=isShow class="bg-green-300 my-10 mx-auto w-1/2 border text-center">
        <p>投稿に成功しました</p>
    </div>
    <div v-show=isFail class="bg-green-300 my-10 mx-auto w-1/2 border text-center">
        <p>投稿に失敗しました</p>
        <br>
        <p>項目、金額、補足を入力してください。</p>
        <p>金額は3桁以上で入力してください</p>
    </div>
    <div>
      <table class="my-10 m-auto border w-9/12">
        <tr class="border bg-green-300">
          <th class="text-left">項目</th>
          <th class="text-left">金額</th>
          <th class="text-left">補足</th>
        </tr>
        <tr class=" m-2 ">
          <td class="text-left">
            <input v-model="name" placeholder="項目を入力してください">
          </td>
          <td class="text-left">
            <input v-model="money" placeholder="金額を入力してください">
          </td>
          <td class="text-left">
            <input v-model="appendix" placeholder="補足事項があれば記入">
          </td>
        </tr>
      </table>
      <router-link to= '/post'  class="text-red-500">
          <button @click="addItem"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-auto"
            type="button">
            新規作成
          </button>
      </router-link>
    </div>
  </div>
</template>
