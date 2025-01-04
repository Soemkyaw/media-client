<template>
  <!-- navbar  -->
  <Navbar></Navbar>

  <main class="container mx-auto">
    <!-- category list  -->
    <div
      class="bg-yellow-100 flex flex-wrap justify-center items-center px-5 py-3 rounded-lg gap-3"
      style="background-color: #fdf8e1"
    >
      <div class="bg-customBrown text-white rounded px-2 py-1">Politics</div>
      <div class="bg-customBrown text-white rounded px-2 py-1">Business</div>
      <div class="bg-customBrown text-white rounded px-2 py-1">Technology</div>
      <div class="bg-customBrown text-white rounded px-2 py-1">Health</div>
      <div class="bg-customBrown text-white rounded px-2 py-1">
        Entertainment
      </div>
      <div class="bg-customBrown text-white rounded px-2 py-1">Sports</div>
      <div class="bg-customBrown text-white rounded px-2 py-1">Science</div>
      <div class="bg-customBrown text-white rounded px-2 py-1">Lifestyle</div>
      <div class="bg-customBrown text-white rounded px-2 py-1">Education</div>
      <div class="bg-customBrown text-white rounded px-2 py-1">Weather</div>
      <div class="bg-customBrown text-white rounded px-2 py-1">
        Breaking News
      </div>
    </div>

    <section class="px-5">
      <h3
        class="mt-10 bg-yellow-50 inline-block px-5 py-2 text-xl font-bold italic border-b-4 border-customBrown -rotate-6"
      >
        Articles
      </h3>
      <!-- cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-5 gap-5">

        <router-link to="/posts/detail" class="relative my-5 group">
          <div
            class="border border-customBrown group-hover:shadow-xl mx-8 rounded-lg overflow-hidden"
          >
            <div>
              <img src="../assets/image/media.jpg" class="cardHeight" />
            </div>
            <div class="bg-yellow-100">
              <button
                class="py-2 px-3 text-sm text-customBrown font-bold w-4/5 bg-yellow-400 mx-auto block -rotate-3 absolute left-0 z-10 transition ease-in-out delay-200 group-hover:relative group-hover:rotate-0 group-hover:left-auto group-hover:w-full"
              >
                This is about Technology
              </button>
              <button
                class="py-2 px-3 text-gray-50 w-full mx-auto group-hover:hidden"
              >
                This is about Technology
              </button>
            </div>
          </div>
        </router-link>

        <router-link to="/posts/detail" class="relative my-5 group">
          <div
            class="border border-customBrown group-hover:shadow-xl mx-8 rounded-lg overflow-hidden"
          >
            <div>
              <img src="../assets/image/media.jpg" class="cardHeight" />
            </div>
            <div class="bg-yellow-100">
              <button
                class="py-2 px-3 text-sm text-customBrown font-bold w-4/5 bg-yellow-400 mx-auto block -rotate-3 absolute left-0 z-10 transition ease-in-out delay-200 group-hover:relative group-hover:rotate-0 group-hover:left-auto group-hover:w-full"
              >
                This is about Technology
              </button>
              <button
                class="py-2 px-3 text-gray-50 w-full mx-auto group-hover:hidden"
              >
                This is about Technology
              </button>
            </div>
          </div>
        </router-link>

        <router-link to="/posts/detail" class="relative my-5 group">
          <div
            class="border border-customBrown group-hover:shadow-xl mx-8 rounded-lg overflow-hidden"
          >
            <div>
              <img src="../assets/image/media.jpg" class="cardHeight" />
            </div>
            <div class="bg-yellow-100">
              <button
                class="py-2 px-3 text-sm text-customBrown font-bold w-4/5 bg-yellow-400 mx-auto block -rotate-3 absolute left-0 z-10 transition ease-in-out delay-200 group-hover:relative group-hover:rotate-0 group-hover:left-auto group-hover:w-full"
              >
                This is about Technology
              </button>
              <button
                class="py-2 px-3 text-gray-50 w-full mx-auto group-hover:hidden"
              >
                This is about Technology
              </button>
            </div>
          </div>
        </router-link>

        <router-link to="/posts/detail" class="relative my-5 group">
          <div
            class="border border-customBrown group-hover:shadow-xl mx-8 rounded-lg overflow-hidden"
          >
            <div>
              <img src="../assets/image/media.jpg" class="cardHeight" />
            </div>
            <div class="bg-yellow-100">
              <button
                class="py-2 px-3 text-sm text-customBrown font-bold w-4/5 bg-yellow-400 mx-auto block -rotate-3 absolute left-0 z-10 transition ease-in-out delay-200 group-hover:relative group-hover:rotate-0 group-hover:left-auto group-hover:w-full"
              >
                This is about Technology
              </button>
              <button
                class="py-2 px-3 text-gray-50 w-full mx-auto group-hover:hidden"
              >
                This is about Technology
              </button>
            </div>
          </div>
        </router-link>

        <router-link to="/posts/detail" class="relative my-5 group">
          <div
            class="border border-customBrown group-hover:shadow-xl mx-8 rounded-lg overflow-hidden"
          >
            <div>
              <img src="../assets/image/media.jpg" class="cardHeight" />
            </div>
            <div class="bg-yellow-100">
              <button
                class="py-2 px-3 text-sm text-customBrown font-bold w-4/5 bg-yellow-400 mx-auto block -rotate-3 absolute left-0 z-10 transition ease-in-out delay-200 group-hover:relative group-hover:rotate-0 group-hover:left-auto group-hover:w-full"
              >
                This is about Technology
              </button>
              <button
                class="py-2 px-3 text-gray-50 w-full mx-auto group-hover:hidden"
              >
                This is about Technology
              </button>
            </div>
          </div>
        </router-link>

        <router-link to="/posts/detail" class="relative my-5 group">
          <div
            class="border border-customBrown group-hover:shadow-xl mx-8 rounded-lg overflow-hidden"
          >
            <div>
              <img src="../assets/image/media.jpg" class="cardHeight" />
            </div>
            <div class="bg-yellow-100">
              <button
                class="py-2 px-3 text-sm text-customBrown font-bold w-4/5 bg-yellow-400 mx-auto block -rotate-3 absolute left-0 z-10 transition ease-in-out delay-200 group-hover:relative group-hover:rotate-0 group-hover:left-auto group-hover:w-full"
              >
                This is about Technology
              </button>
              <button
                class="py-2 px-3 text-gray-50 w-full mx-auto group-hover:hidden"
              >
                This is about Technology
              </button>
            </div>
          </div>
        </router-link>

      </div>
      <div class=" text-center mb-10">
        <button class=" bg-yellow-400 px-3 py-2 rounded-full hover:bg-yellow-500">See More</button>
      </div>
    </section>
  </main>

  <Footer></Footer>
</template>

<script>
import Footer from '../components/Footer'
import Navbar from "../components/Navbar";
export default {
  components: {
    Footer, Navbar },
};
</script>

<style>
.cardHeight {
  height: 350px;
  object-fit: cover;
}
</style>