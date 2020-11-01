<template>
    <div class="row" align="left">
        <div class="col-4">  
            <p  class="card-text"><strong>Name: </strong>{{ cdata.name }}</p>
            <p  class="card-text"><strong>Height: </strong>{{ cdata.height }}</p>
            <p  class="card-text"><strong>Mass: </strong>{{ cdata.mass }}</p>
            <p  class="card-text"><strong>Hair Color: </strong>{{ cdata.hair_color }}</p>
            <p  class="card-text"><strong>Skin Color: </strong>{{ cdata.skin_color }}</p>
            <p  class="card-text"><strong>Eye Color: </strong> {{cdata.eye_color }}</p>
            <p  class="card-text"><strong>Birth Year: </strong>{{ cdata.birth_year }}</p>
            <p  class="card-text"><strong>Gender: </strong>{{ cdata.gender }}</p>
            </div>
          <div class="col-4">  
            <p class="card-text"><strong>Homeworld: </strong></p>
            <p id="homeworld" class="card-text" >{{getdata(cdata.homeworld,'homeworld','')}}</p>
            <div>
              <p class="card-text"><strong>Species: </strong></p>
              <div v-for="(specie, index1) in cdata.species" :key="index1">
                <p :id="'specie'+index1" class="card-text" >{{getdata(specie,'specie',index1)}}</p>
            </div>
            </div>
            <div>
            <p class="card-text"><strong>Vehicles: </strong></p>
            <div v-for="(vehicle, index2) in cdata.vehicles" :key="index2">
              <p :id="'vehicle'+index2" class="card-text" >{{getdata(vehicle,'vehicle',index2)}}</p>
            </div>
            </div>
            <div>
          <p class="card-text"><strong>Starships: </strong></p>
            <div v-for="(starship, index3) in cdata.starships" :key="index3">
              <p :id="'starship'+index3" class="card-text" >{{getdata(starship,'starship',index3)}}</p>
            </div>
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