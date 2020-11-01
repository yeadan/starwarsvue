<template>
<div class="container">
  <div class="title col-12">
    <h1>There Are {{number}} Planets</h1>
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
          <th scope="col">Population</th>

        </tr>
      </thead>
      <tbody slot="body" slot-scope="sort">
        <tr v-for="(value,index) in sort.values" :key="index">
          <td @click="getone(value.url)"><small>{{ value.name }}</small></td>
          <td @click="getone(value.url)"><small>{{ value.population }}</small></td>
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
            <p  class="card-text"><strong>Rotation Period: </strong>{{ onedata.rotation_period }}</p>
            <p  class="card-text"><strong>Orbital Period: </strong>{{ onedata.orbital_period }}</p>
            <p  class="card-text"><strong>Diameter: </strong>{{ onedata.diameter }}</p>
            <p  class="card-text"><strong>Climate: </strong>{{ onedata.climate }}</p>
            <p  class="card-text"><strong>Gravity: </strong> {{onedata.gravity }}</p>
            <p  class="card-text"><strong>Terrain: </strong>{{ onedata.terrain }}</p>
            <p  class="card-text"><strong>Surface Water: </strong>{{ onedata.surface_water }}</p>
            <p  class="card-text"><strong>Population: </strong> {{onedata.population }}</p>
          </div>
          <div class="col-4">  
            <p class="card-text"><strong>Residents: </strong></p>
            <div v-for="(resident, index) in onedata.residents" :key="index">
              <p :id="'resident'+index" class="card-text" >{{getdata(resident,'resident',index)}}</p>
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
  created() {
    this.dataload('https://swapi.dev/api/planets')
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