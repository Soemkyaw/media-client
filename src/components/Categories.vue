<template>
  <div class="lg:flex justify-between lg:items-center space-x-5 my-5">
    <div
      class="bg-yellow-100 flex flex-wrap justify-center items-center px-5 py-3 rounded-lg gap-3"
      style="background-color: #fdf8e1"
    >
      <div
          class="border-b border-b-yellow-700 text-yellow-700 px-2 py-1 cursor-pointer"
          @click="getAllPosts"
        >
        All
      </div>
      <div
        v-for="category in categories"
        :key="category.id"
        class="bg-yellow-700 text-white rounded px-2 py-1 cursor-pointer"
        @click="filterByCategory(category.id)"
      >
        {{ category.name }}
      </div>
    </div>
    <div class="lg:mt-0 sm:mt-5 ">
      <form class="w-full max-w-sm mx-auto">
        <div class="flex items-center border-b border-yellow-500 py-2">
          <input
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search"
            v-model="searchKey"
          />
          <button
            class="flex-shrink-0 bg-yellow-500 hover:bg-yellow-700 border-yellow-500 hover:border-yellow-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
            @click="searchKeyHandler"
          >
            Search
          </button>
          <button
            class="flex-shrink-0 border-transparent border-4 text-yellow-500 hover:text-yellow-800 text-sm py-1 px-2 rounded"
            type="button"
            @click="cancelSearchKey()"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [],
      searchKey: "",
    };
  },
  methods: {
    getCategories() {
      fetch("http://127.0.0.1:8000/api/categories")
        .then((response) => {
          return response.json();
        })
        .then((datas) => {
          this.categories = datas.categories;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    cancelSearchKey() {
      this.searchKey = '';
      this.getAllPosts();
    },

    searchKeyHandler()
    {
      this.$emit("searchKeyHandler",this.searchKey)
    },

    filterByCategory(id)
    {
      this.$emit("filterByCategory",id)
    },
    getAllPosts()
    {
      this.$emit("getAllPosts")
    }
  },
  mounted() {
    this.getCategories();
  },
};
</script>

<style>
</style>