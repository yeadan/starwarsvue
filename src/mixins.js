import axios from 'axios'

export const jediMixins = {
    methods: {
    // Función para devolver los datos de starships,
    // films, vehicles, homeworld y species
        getdata(url,index,id) {
            let element=index+id
            axios.get(url)
            .then(response => {
              if (index == 'film')
                document.getElementById(element).innerHTML = response.data.title
              else
                document.getElementById(element).innerHTML = response.data.name
            })
            .catch(error => {
              console.log(error)
            })
          }
    }
}
