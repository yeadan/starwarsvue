<template>
<div class="container">
  <div class="title col-12">
    <h1>There Are {{number}} Planets</h1>
    <br>
  </div>
    <div class="col-6">
      <button disabled id="Previous" v-on:click="loadplanets(previous)">Previous</button>
      <button disabled id="Next" v-on:click="loadplanets(next)">Next</button>
    </div>
  <div class="row">
    <div class="col-6">
      <br>
      <SortedTable :values="listplanets" class="table table-striped">
      <thead>
        <tr>
          <th scope="col">
            <SortLink name="name">Name</SortLink>
          </th>
          <th scope="col">Population</th>

        </tr>
      </thead>
      <tbody slot="body" slot-scope="sort">
        <tr v-for="(value,index) in sort.values" :key="index">
          <td @click="getplanet(value.url)"><small>{{ value.name }}</small></td>
          <td @click="getplanet(value.url)"><small>{{ value.population }}</small></td>
        </tr>
      </tbody>
    </SortedTable>
    </div>
    <div class="col-6">
      <br>
      <div v-if="planetdata != ''" class="row card-title">
          <h4 class="col-12 ">{{planetdata.name}}</h4>
        </div>
        <div v-else class="card-title">
          <h4 >Make Selection</h4>
       </div>
       <br>
        <div class="row" align="left" v-if='planetdata != ""'>
          <div class="col-4">  
            <p  class="card-text"><strong>Name: </strong>{{ planetdata.name }}</p>
            <p  class="card-text"><strong>Rotation Period: </strong>{{ planetdata.rotation_period }}</p>
            <p  class="card-text"><strong>Orbital Period: </strong>{{ planetdata.orbital_period }}</p>
            <p  class="card-text"><strong>Diameter: </strong>{{ planetdata.diameter }}</p>
            <p  class="card-text"><strong>Climate: </strong>{{ planetdata.climate }}</p>
            <p  class="card-text"><strong>Gravity: </strong> {{planetdata.gravity }}</p>
            <p  class="card-text"><strong>Terrain: </strong>{{ planetdata.terrain }}</p>
            <p  class="card-text"><strong>Surface Water: </strong>{{ planetdata.surface_water }}</p>
            <p  class="card-text"><strong>Population: </strong> {{planetdata.population }}</p>
          </div>
          <div class="col-4">  
            <p class="card-text"><strong>Residents: </strong></p>
            <div v-for="(resident, index) in planetdata.residents" :key="index">
              <p :id="'resident'+index" class="card-text" >{{getdata(resident,'resident',index)}}</p>
            </div>
          </div>
          <div class="col-3">  
            <p class="card-text"><strong>Films: </strong></p>
            <div v-for="(film, index) in planetdata.films" :key="index">
              <p :id="'film'+index" class="card-text" >{{getdata(film,'film',index)}}</p>
            </div>
          </div>
        </div>
        <div v-else class="col-12 alert alert-danger" role="alert">
          No Planet Selected
        </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
//import $ from 'jquery'
export default {
  data () {
    return {
      number: 0,
      previous:'',
      next:'',
      planetdata:'',
      listplanets: [],
    }
  },
  created() {
    this.loadplanets('https://swapi.dev/api/planets')
  },
  methods: {
    loadplanets(index) {
      this.planetdata = ''
      const url = index
      axios.get(url)
      .then(response => {
        this.number = response.data.count
        this.listplanets = response.data.results
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
    },
    getplanet(index) {
      const url = index
      axios.get(url)
      .then(response => {
        this.planetdata = response.data
      })
      .catch(error => {
        console.log(error)
      })
    },
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
</script>
<style scoped>
button {
  margin: 5px;
}
.card-text {
  margin:10px
}
</style>