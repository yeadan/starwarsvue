<template>
<div class="container">
  <div class="title col-12">
    <h1>There Are {{number}} Characters</h1>
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
          <th scope="col">Height</th>

        </tr>
      </thead>
      <tbody slot="body" slot-scope="sort">
        <tr v-for="(value,index0) in sort.values" :key="index0">
          <td @click="getone(value.url)"><small>{{ value.name }}</small></td>
          <td @click="getone(value.url)"><small>{{ value.height }}</small></td>
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
            <p  class="card-text"><strong>Height: </strong>{{ onedata.height }}</p>
            <p  class="card-text"><strong>Mass: </strong>{{ onedata.mass }}</p>
            <p  class="card-text"><strong>Hair Color: </strong>{{ onedata.hair_color }}</p>
            <p  class="card-text"><strong>Skin Color: </strong>{{ onedata.skin_color }}</p>
            <p  class="card-text"><strong>Eye Color: </strong> {{onedata.eye_color }}</p>
            <p  class="card-text"><strong>Birth Year: </strong>{{ onedata.birth_year }}</p>
            <p  class="card-text"><strong>Gender: </strong>{{ onedata.gender }}</p>
            </div>
          <div class="col-4">  
            <p class="card-text"><strong>Homeworld: </strong></p>
            <p id="homeworld" class="card-text" >{{getdata(onedata.homeworld,'homeworld','')}}</p>
            <div>
              <p class="card-text"><strong>Species: </strong></p>
              <div v-for="(specie, index1) in onedata.species" :key="index1">
                <p :id="'specie'+index1" class="card-text" >{{getdata(specie,'specie',index1)}}</p>
            </div>
            </div>
            <div>
            <p class="card-text"><strong>Vehicles: </strong></p>
            <div v-for="(vehicle, index2) in onedata.vehicles" :key="index2">
              <p :id="'vehicle'+index2" class="card-text" >{{getdata(vehicle,'vehicle',index2)}}</p>
            </div>
            </div>
            <div>
          <p class="card-text"><strong>Starships: </strong></p>
            <div v-for="(starship, index3) in onedata.starships" :key="index3">
              <p :id="'starship'+index3" class="card-text" >{{getdata(starship,'starship',index3)}}</p>
            </div>
            </div>
          </div>
          <div class="col-3">  
            <p class="card-text"><strong>Films: </strong></p>
            <div v-for="(film, index) in onedata.films" :key="index">
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
export default {
  mixins: [jediMixins],
  created() {
    this.dataload('https://swapi.dev/api/people')
  }
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
