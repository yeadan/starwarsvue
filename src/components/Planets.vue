<template>
    <div class="row" align="left">
        <div class="col-4">  
            <p  class="card-text"><strong>Name: </strong>{{ cdata.name }}</p>
            <p  class="card-text"><strong>Rotation Period: </strong>{{ cdata.rotation_period }}</p>
            <p  class="card-text"><strong>Orbital Period: </strong>{{ cdata.orbital_period }}</p>
            <p  class="card-text"><strong>Diameter: </strong>{{ cdata.diameter }}</p>
            <p  class="card-text"><strong>Climate: </strong>{{ cdata.climate }}</p>
            <p  class="card-text"><strong>Gravity: </strong> {{cdata.gravity }}</p>
            <p  class="card-text"><strong>Terrain: </strong>{{ cdata.terrain }}</p>
            <p  class="card-text"><strong>Surface Water: </strong>{{ cdata.surface_water }}</p>
            <p  class="card-text"><strong>Population: </strong> {{cdata.population }}</p>
          </div>
          <div class="col-4">  
            <p class="card-text"><strong>Residents: </strong></p>
            <div v-for="(resident, index) in cdata.residents" :key="index">
              <p :id="'resident'+index" class="card-text" >{{getdata(resident,'resident',index)}}</p>
            </div>
          </div>
          <div class="col-3">  
            <p class="card-text"><strong>Films: </strong></p>
            <div v-for="(film, index) in cdata.films" :key="index">
              <p :id="'film'+index" class="card-text" >{{getdata(film,'film',index)}}</p>
            </div>
          </div>
        </div>
</template>
<script>
import {jediMixins} from '@/mixins.js'
export default {
    props: ['cdata'],
    mixins: [jediMixins]
}
</script>   