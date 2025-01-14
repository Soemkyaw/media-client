<template>
  <!-- hero section  -->
  <section>
    <div class="container mx-auto my-auto">
      <div class=" space-y-8">
        <img src="../assets/image/media.jpg" class="md:w-2/3 mx-auto" />
        <div class=" text-center">
          <router-link class=" border py-3 px-10 lg:px-16 rounded-lg bg-yellow-400 hover:bg-yellow-500" to="/posts">Gettting Start</router-link>
        </div>
        <div class=" w-2/3 mx-auto  lg:text-2xl" style=" text-align: center;">
          Empowering creativity and storytelling, we bring your ideas to life with
          cutting-edge media solutions. From captivating visuals to engaging
          content, we connect audiences and brands through innovative,
          high-quality experiences.
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
  components: { Navbar },};
</script>

<style>
</style>