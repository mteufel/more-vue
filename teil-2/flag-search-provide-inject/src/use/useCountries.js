import { ref } from 'vue'

export function useSearch() {
    const options = ref([])
    const onSearch = (search) => {
        if (search === "") {
          return
        }
        fetch("https://restcountries.eu/rest/v2/name/" + search).then(res => {
          res.json().then(json => options.value = json.map(e => {
            return { text: `${e.name} (${e.capital})`,
                     value: e.alpha2Code.toLowerCase() }
                   })
          )
        })
    }
    return { options, onSearch }
  }