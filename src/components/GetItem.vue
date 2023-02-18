<script>
import axios from 'axios'
import { reactive } from 'vue'

export default function getItem () {
  const wallet = reactive({})
  if (wallet.values == null) {
    const path = 'http://localhost:8888/'
    axios.get(path)
      .then(response => {
        wallet.values = response.data
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }
  return wallet
}

</script>
