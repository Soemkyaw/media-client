<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <Navbar></Navbar>
  <router-view/>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  components: { Navbar },
  
}
</script>
<style>

</style>
