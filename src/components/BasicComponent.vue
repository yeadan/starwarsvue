<template>
<div class="container">
    <div class="title col-12">
    <h1>There Are {{number}} {{titulo}}</h1>
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
        </tr>
      </thead>
      <tbody slot="body" slot-scope="sort">
        <tr v-for="(value,index0) in sort.values" :key="index0">
          <td @click="getone(value.url)"><small>{{ value.name }}</small></td>
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
        <component :is="compo" v-if='onedata != ""' :cdata='onedata' />
        <div v-else class="col-12 alert alert-danger" role="alert">
          No {{titulo}} Selected
        </div>
    </div>
  </div>
</div>
</template>

<script>
import {jediMixins} from '@/mixins.js'
import people from '@/components/People.vue'
import starships from '@/components/Starships.vue'
import planets from '@/components/Planets.vue'
export default {
  data() { 
    return {
      compo: this.titulo,
  }
  },
  props: ['titulo'],
  components: {
    People: people,
    Starships: starships,
    Planets: planets
  },
  mixins: [jediMixins],
  created() {
    let load = 'https://swapi.dev/api/'+this.titulo.toLowerCase()
    this.dataload(load)
  },
  watch: {
        // Carga los datos si cambia la ruta
        '$route'() {
          this.compo= this.titulo
          let load = 'https://swapi.dev/api/'+this.titulo.toLowerCase()
          this.dataload(load)
        }
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
