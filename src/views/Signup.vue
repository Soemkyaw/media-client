<template>
  <section>
    <form
      @submit.prevent="submitHandler"
      class="px-5 mx-5 pb-5 sm:max-lg:w-1/2 lg:w-1/4 md:mx-auto space-y-5 mt-5 my-10 border rounded-md"
    >
      <h3
        class="-ml-10 sm:max-lg:-ml-10 lg:-m-16 bg-yellow-50 inline-block px-5 py-2 text-xl font-bold italic border-b-4 border-customBrown -rotate-6"
      >
        Signup Form
      </h3>
      <div>
        <label for="username" class="block mt-10 mb-3 font-bold text-gray-600"
          >Username</label
        >
        <input
          v-model="name"
          type="text"
          id="username"
          class="w-full rounded border-gray-300 border-b-2 border-b-yellow-300"
          placeholder="Enter your username here..."
        />
      </div>
      <div>
        <label for="email" class="block mb-3 font-bold text-gray-600"
          >Email</label
        >
        <input
          v-model="email"
          type="email"
          id="email"
          class="w-full rounded border-gray-300 border-b-2 border-b-yellow-300"
          placeholder="Enter your email here..."
        />
      </div>
      <div>
        <label for="password" class="block mb-3 font-bold text-gray-600"
          >Password</label
        >
        <input
          v-model="password"
          type="password"
          id="password"
          class="w-full rounded border-gray-300 border-b-2 border-b-yellow-300"
        />
      </div>
      <div>
        <label
          for="password_confirmation"
          class="block mb-3 font-bold text-gray-600"
          >Confirm Password</label
        >
        <input
          v-model="password_confirmation"
          type="password"
          id="password_confirmation"
          class="w-full rounded border-gray-300 border-b-2 border-b-yellow-300"
        />
      </div>

      <div v-if="errorMessage">
        <div class=" bg-yellow-100 px-3 py-2 text-sm text-red-500 rounded">
          {{ errorMessage }}
        </div>
      </div>

      <div class="text-center">
        <button
          class="px-8 py-2 border rounded-md overflow-hidden border-customBrown bg-yellow-100 hover:bg-yellow-200"
        >
          Sign Up
        </button>
      </div>
    </form>
  </section>

  <Footer></Footer>
</template>

<script>
import { mapActions } from "vuex";
import Footer from "../components/Footer";
export default {
  components: { Footer },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      errorMessage: "",
    };
  },
  methods: {
    ...mapActions(['updateIsLoggedIn']),
    async submitHandler() {
      const data = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
      };

      try {
        let response = await fetch("http://127.0.0.1:8000/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.status != 200) {
          let errorResponse = await response.json();
          throw new Error(errorResponse.message);
        }
        
        if (response.status != 200) {
          throw new Error("Signup failed. Please check your credentials.");
        }

        let result = await response.json();

        localStorage.setItem("token", result.token);
        this.updateIsLoggedIn(true)
        this.$router.push("/posts");
      } catch (err) {
        this.errorMessage = err.message
      }
    },
  },
};
</script>

<style>
</style>