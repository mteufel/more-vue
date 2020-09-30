const createFlagStore = () => {

    const url = 'https://restcountries.eu/rest/v2'

    const queryByName = async (search) => {
        let response = await fetch(`${url}/name/` + search) 
        return await response.json()
    }

    // just a little helper to check if async-await is really blocking
    const wait = (ms) => {
        var start = new Date().getTime();
        var end = start;
        while(end < start + ms) {
          end = new Date().getTime();
       }
     }

    let options = []
    let selectedCountry = 'it'
    let subscribers = []

    return {

        getOptions: () => options,
        getSelectedCountry: () => selectedCountry,

        doSearch: async(search) => {
            //console.log('Start, ' + new Date().getTime())
            if (search === "") { 
                return
            }
            let json = await queryByName(search)
            options = await json.map(e => {
                return { text: `${e.name} (${e.capital})`,
                         value: e.alpha2Code.toLowerCase() }
            })
            //console.log('vor Wait, ' + new Date().getTime())
            //wait(1000)  
            //console.log('End, ' + new Date().getTime())
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

