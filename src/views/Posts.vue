<template>

  <main class="container mx-auto">
    <!-- category list  -->
    <Categories
      @searchKeyHandler="searchKeyHandler"
      @filterByCategory="filterByCategory"
      @getAllPosts="getAllPosts"
    ></Categories>

    <section class="px-5">
      <h3
        class="mt-10 bg-yellow-50 inline-block px-5 py-2 text-xl font-bold italic border-b-4 border-customBrown -rotate-6"
      >
        Articles
      </h3>
      <!-- cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-5 gap-5">
        <router-link
          :to="{ name: 'detail', params: { id: post.id } }"
          v-for="post in posts"
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
      <div class="text-center mb-10">
        <button
          class="bg-yellow-400 px-3 py-2 rounded-full hover:bg-yellow-500"
        >
          See More
        </button>
      </div>
    </section>
  </main>

  <Footer></Footer>
</template>

<script>
import Categories from "../components/Categories";
import Footer from "../components/Footer";
export default {
  components: {
    Categories,
    Footer,
  },
  data() {
    return {
      posts: [],
      categories: [],
    };
  },
  methods: {
    fetchDatas(url) {
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((datas) => {
          this.posts = datas.posts.map((post) => {
            post.featured_image =
              "http://127.0.0.1:8000/storage/" + post.featured_image;
            return post;
          });
        })
        .catch((err) => {
          console.log(err.message);
        })
    },

    getPosts()
    {
      this.fetchDatas("http://127.0.0.1:8000/api/posts")
    },

    searchKeyHandler(searchKey)
    {
      this.fetchDatas(`http://127.0.0.1:8000/api/posts?search=${searchKey}`)
    },

    filterByCategory(id)
    {
      this.fetchDatas(`http://127.0.0.1:8000/api/categories/${id}/posts`);
    },

    getAllPosts() {
      this.getPosts();
    },
  },
  mounted() {
    this.getPosts();
  },
};
</script>

<style>
.cardHeight {
  height: 350px;
  object-fit: cover;
}
</style>