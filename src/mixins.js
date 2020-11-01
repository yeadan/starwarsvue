import axios from 'axios'

export const jediMixins = {
  data () {
    return {
      number: 0,
      previous:'',
      next:'',
      onedata:'',
      listdata: [],
    }
  },
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
          },
          //Función para devolver los detalles del elemento
          getone(index) {
            let url = index
            axios.get(url)
            .then(response => {
              this.onedata = response.data
            })
            .catch(error => {
              console.log(error)
            })
          },
          dataload(index) {
            this.onedata = ''
            this.number = '<loading...>'
            const url = index
            axios.get(url)
            .then(response => {
              this.number = response.data.count
              this.listdata = response.data.results
              if (response.data.previous)
              {
                document.getElementById("Previous").disabled = false
                this.previous = response.data.previous
              }
              else document.getElementById("Previous").disabled = true
              if (response.data.next)
              {
                document.getElementById("Next").disabled = false
                this.next = response.data.next
              }
              else document.getElementById("Next").disabled = true
            })
            .catch(error => {
              console.log(error)
            })
          }
    }
}
