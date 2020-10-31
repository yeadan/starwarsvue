<template>
<div class="container">
  <div class="title col-12">
    <h1>There Are {{number}} Starships</h1>
    <br>
  </div>
    <div class="col-6">
      <button disabled id="Previous" v-on:click="loadstarships(previous)">Previous</button>
      <button disabled id="Next" v-on:click="loadstarships(next)">Next</button>
    </div>
  <div class="row">
    <div class="col-6">
      <br>
      <SortedTable :values="liststarships" class="table table-striped">
      <thead>
        <tr>
          <th scope="col">
            <SortLink name="name">Name</SortLink>
          </th>
          <th scope="col">Model</th>

        </tr>
      </thead>
      <tbody slot="body" slot-scope="sort">
        <tr v-for="(value,index) in sort.values" :key="index">
          <td @click="getstarship(value.url)"><small>{{ value.name }}</small></td>
          <td @click="getstarship(value.url)"><small>{{ value.model }}</small></td>
        </tr>
      </tbody>
    </SortedTable>
    </div>
    <div class="col-6">
      <br>
      <div v-if="starshipdata != ''" class="row card-title">
          <h4 class="col-12 ">{{starshipdata.name}}</h4>
        </div>
        <div v-else class="card-title">
          <h4 >Make Selection</h4>
       </div>
       <br>
        <div class="row" align="left" v-if='starshipdata != ""'>
          <div class="col-4">  
            <p  class="card-text"><strong>Name: </strong>{{ starshipdata.name }}</p>
            <p  class="card-text"><strong>Model: </strong>{{ starshipdata.model }}</p>
            <p  class="card-text"><strong>Manufacturer: </strong>{{ starshipdata.manufacturer }}</p>
            <p  class="card-text"><strong>Cost in Credits: </strong>{{ starshipdata.cost_in_credits }}</p>
            <p  class="card-text"><strong>Length: </strong>{{ starshipdata.length }}</p>
            <p  class="card-text"><strong>Max atmosphering speed: </strong> {{starshipdata.max_atmosphering_speed }}</p>
            <p  class="card-text"><strong>Crew: </strong>{{ starshipdata.crew }}</p>
            <p  class="card-text"><strong>Passengers: </strong>{{ starshipdata.passengers }}</p>         
          </div>
          <div class="col-4">  
            <p class="card-text"><strong>Pilots: </strong></p>
            <div v-for="(pilot, index) in starshipdata.pilots" :key="index">
              <p :id="'pilot'+index" class="card-text" >{{getdata(pilot,'pilot',index)}}</p>
            </div>
            <p  class="card-text"><strong>Cargo Capacity: </strong> {{starshipdata.cargo_capacity }}</p>
            <p  class="card-text"><strong>Consumables: </strong>{{ starshipdata.consumables }}</p>
            <p  class="card-text"><strong>Hyperdrive Rating: </strong>{{ starshipdata.hyperdrive_rating }}</p>
            <p  class="card-text"><strong>MGLT: </strong>{{ starshipdata.MGLT }}</p>
            <p  class="card-text"><strong>Starship Class: </strong>{{ starshipdata.starship_class }}</p> 
          </div>
          <div class="col-3">  
            <p class="card-text"><strong>Films: </strong></p>
            <div v-for="(film, index) in starshipdata.films" :key="index">
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
import {jediMixins} from '@/mixins.js'
export default {
  data () {
    return {
      number: 0,
      previous:'',
      next:'',
      starshipdata:'',
      liststarships: [],
    }
  },
  mixins: [jediMixins],
  mounted() {
    this.loadstarships('https://swapi.dev/api/starships')
  },
  methods: {
    loadstarships(index) {
      this.starshipdata = ''
      const url = index
      axios.get(url)
      .then(response => {
        this.number = response.data.count
        this.liststarships = response.data.results
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
    getstarship(index) {
      const url = index
      axios.get(url)
      .then(response => {
        this.starshipdata = response.data
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