<template>
  <div v-if="isLoggedIn">
    <div class="text-center">
      <span class="inline-block my-3 border-b border-b-yellow-300 text-gray-500"
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
      <div class="border border-gray-100 shadow-md rounded-md px-5 py-3 w-96">
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
      <div class="border border-gray-100 shadow-md rounded-md px-5 py-3 w-96">
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
          repudiandae commodi quo inventore tenetur earum similique ipsum nobis
          recusandae modi nihil laboriosam nulla deleniti repellendus dicta
          quae, omnis, accusantium aspernatur!
        </div>
      </div>
    </div>
  </div>
  <div v-else class=" text-center">
    <p>You need to <router-link to="/login" class=" text-blue-500 underline">Log in</router-link> to comment.</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: mapGetters(['isLoggedIn'])
};
</script>

<style>
</style>