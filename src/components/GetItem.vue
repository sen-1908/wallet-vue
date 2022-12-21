<script>
import axios from 'axios'
import { reactive } from 'vue'

export default function getItem () {
  const items = reactive({})
  const path = 'http://localhost:8888/items'
  axios.get(path)
    .then(response => {
      items.values = response.data
    })
    .catch(error => {
      console.log(error)
    })
  return items
}
</script>
