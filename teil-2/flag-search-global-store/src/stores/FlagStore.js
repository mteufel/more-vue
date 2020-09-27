const createFlagStore = () => {

    const url = 'https://restcountries.eu/rest/v2'

    const queryByName = async (search) => {
        let response = await fetch(`${url}/name/` + search) 
        return await response.json()
    }

    let options = []
    let selectedCountry = 'it'
    let subscribers = []

    return {

        getOptions: () => options,
        getSelectedCountry: () => selectedCountry,

        doSearch: async(search) => {
            if (search === "") { 
                return
            }
            let json = await queryByName(search)
            options = await json.map(e => {
                return { text: `${e.name} (${e.capital})`,
                         value: e.alpha2Code.toLowerCase() }
            })
        },

        subscribe: (fn) => {
            subscribers.push(fn)
        },
        countrySelected: (sel) => {
            selectedCountry = sel;
            subscribers.forEach( s =>s())
        }

    }
}

const flagStore = createFlagStore()
export default flagStore

