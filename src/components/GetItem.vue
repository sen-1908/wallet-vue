<script>
import axios from 'axios'
import { reactive, toRefs } from 'vue'

export default function getItem () {
  const items = reactive({})
  console.log(toRefs(items.values))
  if (items.values == null) {
    const path = 'http://localhost:8888/items'
    axios.get(path)
      .then(response => {
        items.values = response.data
        console.log(items)
      })
      .catch(error => {
        console.log(error)
      })
  }
  return items
}

</script>
