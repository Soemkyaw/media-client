<template>
  <!-- navbar  -->
  <Navbar></Navbar>

  <section>
    <div class="container mx-auto">
      <!-- post detail  -->
      <div class="px-5">
        <h3
          class="mt-10 bg-yellow-50 inline-block px-5 py-2 text-xl font-bold italic border-b-4 border-customBrown -rotate-6"
        >
          Article detail
        </h3>
        <!-- cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 my-5 gap-5">
          <div class="relative my-5 group">
            <div
              class="border border-customBrown group-hover:shadow-md mx-8 rounded-lg overflow-hidden"
            >
              <div>
                <img src="../assets/image/media.jpg" class="" />
              </div>
            </div>
          </div>
          <div class="my-5">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima rem
              provident autem earum ipsam dicta. Nihil illo debitis accusamus
              vero, maxime temporibus cupiditate voluptates, vitae, mollitia
              consequuntur repellat molestiae excepturi sit expedita! Quae
              expedita eaque corporis eveniet. Distinctio, eligendi molestiae cum
              praesentium officiis sed doloremque odio atque! Sed veritatis minima
              excepturi at animi commodi delectus! Aspernatur dicta explicabo
              optio pariatur nam enim deserunt odio, laudantium voluptatibus
              assumenda blanditiis nulla, excepturi aliquam rem hic quisquam
              numquam totam corporis consequatur! Excepturi unde recusandae
              commodi labore nisi, quaerat porro exercitationem a. Provident
              cupiditate eius iure, dignissimos magni ut! Sint saepe est fugiat
              doloribus.
            </p>
          </div>
        </div>
  
        <!-- comments  -->
        <div class=" text-center">
          <span class="  inline-block my-3 border-b border-b-yellow-300 text-gray-500">Your Opinion Matters</span>
        </div>
        <div class="grid grid-cols-3 gap-4">
          <div class="grid grid-cols-subgrid gap-4 col-span-3">
            <textarea
              name=""
              id=""
              class="col-start-2 border border-gray-300 rounded-lg border-b-2 px-3 py-4 outline outline-0 focus:border-2 focus:border-yellow-400 focus:outline-0 "
              placeholder="Enter your message"
            ></textarea>
          </div>
        </div>
        <div class="flex flex-col items-center my-5 space-y-3">
          <!-- card  -->
          <div class=" border border-gray-100 shadow-md rounded-md px-5 py-3 w-96">
            <div class=" flex items-center justify-between">
              <div class=" flex items-center">
                <div class=" w-12 h-12 border rounded-full mr-3 inline-block overflow-hidden">
                  <img src="../assets/logo.png" class=" object-fill">
                </div>
                <span class=" text-sm font-bold text-gray-700">name</span>
              </div>
              <div class=" text-yellow-500 text-sm">3 hours ago</div>
            </div>
            <div class=" text-gray-600">this is comment design</div>
          </div>
  
          <!-- card  -->
          <div class=" border border-gray-100 shadow-md rounded-md px-5 py-3 w-96">
            <div class=" flex items-center justify-between">
              <div class=" flex items-center">
                <div class=" w-12 h-12 border rounded-full mr-3 inline-block overflow-hidden">
                  <img src="../assets/logo.png" class=" object-fill">
                </div>
                <span class=" text-sm font-bold text-gray-700">name</span>
              </div>
              <div class=" text-yellow-500 text-sm">3 hours ago</div>
            </div>
            <div class=" text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt repudiandae commodi quo inventore tenetur earum similique ipsum nobis recusandae modi nihil laboriosam nulla deleniti repellendus dicta quae, omnis, accusantium aspernatur!</div>
          </div>
        </div>
      </div>
      
      <div class=" border-b mt-20 border-b-yellow-200"></div>
  
      <!-- related posts  -->
      <h3
        class="mt-10 bg-yellow-50 inline-block px-5 py-2 text-xl font-bold italic border-b-4 border-customBrown -rotate-6"
      >
        Related Articles
      </h3>
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
      </div>
    </div>
  </section>

  <Footer></Footer>
</template>

<script>
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
export default {
  components: {
    Footer,
    Navbar,
  },
};
</script>

<style>
.cardHeight {
  height: 350px;
  object-fit: cover;
}
</style>