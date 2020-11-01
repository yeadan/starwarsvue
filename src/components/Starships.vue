<template>
    <div class="row" align="left">
          <div class="col-4">  
            <p  class="card-text"><strong>Name: </strong>{{ cdata.name }}</p>
            <p  class="card-text"><strong>Model: </strong>{{ cdata.model }}</p>
            <p  class="card-text"><strong>Manufacturer: </strong>{{ cdata.manufacturer }}</p>
            <p  class="card-text"><strong>Cost in Credits: </strong>{{ cdata.cost_in_credits }}</p>
            <p  class="card-text"><strong>Length: </strong>{{ cdata.length }}</p>
            <p  class="card-text"><strong>Max atmosphering speed: </strong> {{cdata.max_atmosphering_speed }}</p>
            <p  class="card-text"><strong>Crew: </strong>{{ cdata.crew }}</p>
            <p  class="card-text"><strong>Passengers: </strong>{{ cdata.passengers }}</p>         
          </div>
          <div class="col-4">  
            <p class="card-text"><strong>Pilots: </strong></p>
            <div v-for="(pilot, index) in cdata.pilots" :key="index">
              <p :id="'pilot'+index" class="card-text" >{{getdata(pilot,'pilot',index)}}</p>
            </div>
            <p  class="card-text"><strong>Cargo Capacity: </strong> {{cdata.cargo_capacity }}</p>
            <p  class="card-text"><strong>Consumables: </strong>{{ cdata.consumables }}</p>
            <p  class="card-text"><strong>Hyperdrive Rating: </strong>{{ cdata.hyperdrive_rating }}</p>
            <p  class="card-text"><strong>MGLT: </strong>{{ cdata.MGLT }}</p>
            <p  class="card-text"><strong>Starship Class: </strong>{{ cdata.starship_class }}</p> 
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