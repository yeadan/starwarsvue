<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Inicio msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Inicio from '@/components/Inicio.vue'

export default {
  name: 'Home',
  components: {
    Inicio
  }
}
</script>
