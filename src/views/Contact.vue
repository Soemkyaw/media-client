<template>
  <!-- contact form -->
  <section>
    <div class="px-5  sm:max-lg:w-1/2 lg:w-1/4  mx-auto space-y-5 mt-5 my-10">
        <h3
          class="-ml-5 sm:max-lg:-ml-10 lg:-m-16 bg-yellow-50 inline-block px-5 py-2 text-xl font-bold italic border-b-4 border-customBrown -rotate-6"
        >
          Contact Form
        </h3>
      <div>
        <label for="" class=" block mt-10 mb-3 font-bold text-gray-600">Email</label>
        <input type="email" class=" w-full rounded border-gray-300 border-b-2 border-b-yellow-300" placeholder="Enter your email here..."/>
      </div>
      <div>
        <label for="" class=" block my-3 font-bold text-gray-600">Message</label>
        <textarea name="" class=" w-full p-3 rounded border border-gray-300 border-b-2 border-b-yellow-300" rows="10" placeholder="Enter your message here..."></textarea>
      </div>
      <div class=" text-center">
        <button class=" px-8 py-2 border rounded-md overflow-hidden  border-customBrown bg-yellow-100 hover:bg-yellow-200">Send</button>
      </div>
    </div>
  </section>

  <Footer></Footer>
</template>

<script>
import Footer from "../components/Footer";
export default {
  components: {
    Footer,

  },
};
</script>

<style>
</style>