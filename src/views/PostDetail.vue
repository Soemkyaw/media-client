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
          {{ post.title }}
        </h3>
        <!-- cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-5 gap-5">
          <!-- image  -->
          <div class="relative my-5 group lg:col-span-1">
            <div
              class="border border-customBrown group-hover:shadow-md mx-8 rounded-lg overflow-hidden"
            >
              <div>
                <img :src="post.featured_image" class="" />
              </div>
            </div>
          </div>
          <!-- content  -->
          <div class="my-5 lg:col-span-2">
            <p>
              {{ post.content }}
            </p>
          </div>
        </div>

        <!-- comments  -->
        <div class="text-center">
          <span
            class="inline-block my-3 border-b border-b-yellow-300 text-gray-500"
            >Your Opinion Matters</span
          >
        </div>
        <div class="grid grid-cols-3 gap-4">
          <div class="grid grid-cols-subgrid gap-4 col-span-3">
            <textarea
              name=""
              id=""
              class="col-start-2 border border-gray-300 rounded-lg border-b-2 px-3 py-4 outline outline-0 focus:border-2 focus:border-yellow-400 focus:outline-0"
              placeholder="Enter your message"
            ></textarea>
          </div>
        </div>
        <div class="flex flex-col items-center my-5 space-y-3">
          <!-- card  -->
          <div
            class="border border-gray-100 shadow-md rounded-md px-5 py-3 w-96"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <div
                  class="w-12 h-12 border rounded-full mr-3 inline-block overflow-hidden"
                >
                  <img src="../assets/logo.png" class="object-fill" />
                </div>
                <span class="text-sm font-bold text-gray-700">name</span>
              </div>
              <div class="text-yellow-500 text-sm">3 hours ago</div>
            </div>
            <div class="text-gray-600">this is comment design</div>
          </div>

          <!-- card  -->
          <div
            class="border border-gray-100 shadow-md rounded-md px-5 py-3 w-96"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <div
                  class="w-12 h-12 border rounded-full mr-3 inline-block overflow-hidden"
                >
                  <img src="../assets/logo.png" class="object-fill" />
                </div>
                <span class="text-sm font-bold text-gray-700">name</span>
              </div>
              <div class="text-yellow-500 text-sm">3 hours ago</div>
            </div>
            <div class="text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
              repudiandae commodi quo inventore tenetur earum similique ipsum
              nobis recusandae modi nihil laboriosam nulla deleniti repellendus
              dicta quae, omnis, accusantium aspernatur!
            </div>
          </div>
        </div>
      </div>

      <div class="border-b mt-20 border-b-yellow-200"></div>

      <!-- related posts  -->
      <h3
        class="mt-10 bg-yellow-50 inline-block px-5 py-2 text-xl font-bold italic border-b-4 border-customBrown -rotate-6"
      >
        Related Articles
      </h3>
      <div
        v-if="randomPosts.length"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-5 gap-5"
      >
        <router-link
          :to="{ name: 'detail', params: { id: post.id } }"
          v-for="post in randomPosts"
          :key="post.id"
          class="relative my-5 group"
        >
          <div
            class="border border-customBrown group-hover:shadow-xl mx-8 rounded-lg overflow-hidden"
          >
            <div>
              <img :src="post.featured_image" class="cardHeight" />
            </div>
            <div class="bg-yellow-100">
              <button
                class="py-2 px-3 text-sm text-customBrown font-bold w-4/5 bg-yellow-400 mx-auto block -rotate-3 absolute left-0 z-10 transition ease-in-out delay-200 group-hover:relative group-hover:rotate-0 group-hover:left-auto group-hover:w-full"
              >
                {{ post.title }}
              </button>
              <button
                class="py-2 px-3 text-gray-50 w-full mx-auto group-hover:hidden"
              >
                {{ post.title }}
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
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default {
  components: { Navbar, Footer },
  props: ["id"],
  data() {
    return {
      post: {},
      randomPosts: [],
    };
  },
  watch: {
    id: {
      immediate: true,
      handler(newId) {
        this.fetchPost(newId);
      },
    },
  },
  methods: {
    fetchPost(id) {
      fetch(`http://127.0.0.1:8000/api/posts/${id}`)
        .then((response) => response.json())
        .then((data) => {
          this.post = {
            ...data.post,
            featured_image:
              "http://127.0.0.1:8000/storage/" + data.post.featured_image,
          };
        })
        .catch((err) => console.error(err));
    },
    fetchRandomPosts() {
      fetch("http://127.0.0.1:8000/api/posts/random")
        .then((response) => response.json())
        .then((data) => {
          this.randomPosts = data.randomPosts.map((post) => ({
            ...post,
            featured_image:
              "http://127.0.0.1:8000/storage/" + post.featured_image,
          }));
        })
        .catch((err) => console.error(err));
    },
  },
  mounted() {
    this.fetchRandomPosts();
    if (this.id) {
      this.fetchPost(this.id);
    }
  },
  updated() {
    window.scrollTo(0, 0);
  },
};
</script>

<style>
.cardHeight {
  height: 350px;
  object-fit: cover;
}
</style>