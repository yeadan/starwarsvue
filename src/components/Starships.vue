<template>
<div class="container">
  <div class="title col-12">
    <h1>There Are {{number}} Starships</h1>
    <br>
  </div>
    <div class="col-6">
      <button disabled id="Previous" v-on:click="dataload(previous)">Previous</button>
      <button disabled id="Next" v-on:click="dataload(next)">Next</button>
    </div>
  <div class="row">
    <div class="col-6">
      <br>
      <SortedTable :values="listdata" class="table table-striped">
      <thead>
        <tr>
          <th scope="col">
            <SortLink name="name">Name</SortLink>
          </th>
          <th scope="col">Model</th>

        </tr>
      </thead>
      <tbody slot="body" slot-scope="sort" >
        <tr v-for="(value,index) in sort.values" :key="index">
          <td @click="getone(value.url)"><small>{{ value.name }}</small></td>
          <td @click="getone(value.url)"><small>{{ value.model }}</small></td>
        </tr>
      </tbody>
    </SortedTable>
    </div>
    <div class="col-6">
      <br>
      <div v-if="onedata != ''" class="row card-title">
          <h4 class="col-12 ">{{onedata.name}}</h4>
        </div>
        <div v-else class="card-title">
          <h4 >Make Selection</h4>
       </div>
       <br>
        <div class="row" align="left" v-if='onedata != ""'>
          <div class="col-4">  
            <p  class="card-text"><strong>Name: </strong>{{ onedata.name }}</p>
            <p  class="card-text"><strong>Model: </strong>{{ onedata.model }}</p>
            <p  class="card-text"><strong>Manufacturer: </strong>{{ onedata.manufacturer }}</p>
            <p  class="card-text"><strong>Cost in Credits: </strong>{{ onedata.cost_in_credits }}</p>
            <p  class="card-text"><strong>Length: </strong>{{ onedata.length }}</p>
            <p  class="card-text"><strong>Max atmosphering speed: </strong> {{onedata.max_atmosphering_speed }}</p>
            <p  class="card-text"><strong>Crew: </strong>{{ onedata.crew }}</p>
            <p  class="card-text"><strong>Passengers: </strong>{{ onedata.passengers }}</p>         
          </div>
          <div class="col-4">  
            <p class="card-text"><strong>Pilots: </strong></p>
            <div v-for="(pilot, index) in onedata.pilots" :key="index">
              <p :id="'pilot'+index" class="card-text" >{{getdata(pilot,'pilot',index)}}</p>
            </div>
            <p  class="card-text"><strong>Cargo Capacity: </strong> {{onedata.cargo_capacity }}</p>
            <p  class="card-text"><strong>Consumables: </strong>{{ onedata.consumables }}</p>
            <p  class="card-text"><strong>Hyperdrive Rating: </strong>{{ onedata.hyperdrive_rating }}</p>
            <p  class="card-text"><strong>MGLT: </strong>{{ onedata.MGLT }}</p>
            <p  class="card-text"><strong>Starship Class: </strong>{{ onedata.starship_class }}</p> 
          </div>
          <div class="col-3">  
            <p class="card-text"><strong>Films: </strong></p>
            <div v-for="(film, index) in onedata.films" :key="index">
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
import {jediMixins} from '@/mixins.js'
export default {
  mixins: [jediMixins],
  mounted() {
    this.dataload('https://swapi.dev/api/starships')
  },
}
</script>
<style scoped>
button {
  margin: 5px
}
tbody {
  cursor:pointer
}
.card-text {
  margin:10px
}
</style>