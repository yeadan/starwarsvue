<template>
  <div class="home">
    <img alt="Star wars logo" src="../assets/logo.png">
    <Inicio/>
  </div>
</template>

<script>
// @ is an alias to /src
import Inicio from '@/views/Inicio.vue'

export default {
  name: 'Home',
  components: {
    Inicio
  }
}
</script>
