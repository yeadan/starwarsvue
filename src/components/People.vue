<template>
<div class="container">
  <div class="title col-12">
    <h1>There Are {{number}} Characters</h1>
    <br>
  </div>
    <div class="col-6">
      <button disabled id="Previous" v-on:click="loadpeople(previous)">Previous</button>
      <button disabled id="Next" v-on:click="loadpeople(next)">Next</button>
    </div>
  <div class="row">
    <div class="col-6">
      <br>
      <SortedTable :values="listpeople" class="table table-striped">
      <thead>
        <tr>
          <th scope="col">
            <SortLink name="name">Name</SortLink>
          </th>
          <th scope="col">Height</th>

        </tr>
      </thead>
      <tbody slot="body" slot-scope="sort">
        <tr v-for="(value,index0) in sort.values" :key="index0">
          <td @click="getpeople(value.url)"><small>{{ value.name }}</small></td>
          <td @click="getpeople(value.url)"><small>{{ value.height }}</small></td>
        </tr>
      </tbody>
    </SortedTable>
    </div>
    <div class="col-6">
      <br>
      <div v-if="peopledata != ''" class="row card-title">
          <h4 class="col-12 ">{{peopledata.name}}</h4>
        </div>
        <div v-else class="card-title">
          <h4 >Make Selection</h4>
       </div>
       <br>
        <div class="row" align="left" v-if='peopledata != ""'>
          <div class="col-4">  
            <p  class="card-text"><strong>Name: </strong>{{ peopledata.name }}</p>
            <p  class="card-text"><strong>Height: </strong>{{ peopledata.height }}</p>
            <p  class="card-text"><strong>Mass: </strong>{{ peopledata.mass }}</p>
            <p  class="card-text"><strong>Hair Color: </strong>{{ peopledata.hair_color }}</p>
            <p  class="card-text"><strong>Skin Color: </strong>{{ peopledata.skin_color }}</p>
            <p  class="card-text"><strong>Eye Color: </strong> {{peopledata.eye_color }}</p>
            <p  class="card-text"><strong>Birth Year: </strong>{{ peopledata.birth_year }}</p>
            <p  class="card-text"><strong>Gender: </strong>{{ peopledata.gender }}</p>
            </div>
          <div class="col-4">  
            <p class="card-text"><strong>Homeworld: </strong></p>
            <p id="homeworld" class="card-text" >{{getdata(peopledata.homeworld,'homeworld','')}}</p>
            <div>
              <p class="card-text"><strong>Species: </strong></p>
              <div v-for="(specie, index1) in peopledata.species" :key="index1">
                <p :id="'specie'+index1" class="card-text" >{{getdata(specie,'specie',index1)}}</p>
            </div>
            </div>
            <div>
            <p class="card-text"><strong>Vehicles: </strong></p>
            <div v-for="(vehicle, index2) in peopledata.vehicles" :key="index2">
              <p :id="'vehicle'+index2" class="card-text" >{{getdata(vehicle,'vehicle',index2)}}</p>
            </div>
            </div>
            <div>
          <p class="card-text"><strong>Starships: </strong></p>
            <div v-for="(starship, index3) in peopledata.starships" :key="index3">
              <p :id="'starship'+index3" class="card-text" >{{getdata(starship,'starship',index3)}}</p>
            </div>
            </div>
          </div>
          <div class="col-3">  
            <p class="card-text"><strong>Films: </strong></p>
            <div v-for="(film, index) in peopledata.films" :key="index">
              <p :id="'film'+index" class="card-text" >{{getdata(film,'film',index)}}</p>
            </div>
          </div>
        </div>
        <div v-else class="col-12 alert alert-danger" role="alert">
          No People Selected
        </div>
    </div>
  </div>
</div>
</template>

<script>
import {jediMixins} from '@/mixins.js'
import axios from 'axios'
export default {
  data () {
    return {
      number: 0,
      previous:'',
      next:'',
      peopledata:'',
      listpeople: [],
    }
  },
  mixins: [jediMixins],
  created() {
    this.loadpeople('https://swapi.dev/api/people')
  },
  methods: {
    loadpeople(index) {
      this.peopledata = ''
      let url = index
      axios.get(url)
      .then(response => {
        // Inicializamos la lista de people, el number y
        // controlamos los botones de previous y next
        this.number = response.data.count
        this.listpeople = response.data.results
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
    // Lista de people
    getpeople(index) {
      let url = index
      axios.get(url)
      .then(response => {
        this.peopledata = response.data
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
