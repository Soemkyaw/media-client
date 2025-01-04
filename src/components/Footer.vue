<template>
  <footer class="bg-gray-800 text-gray-200 py-10">
    <div
      class="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-5"
    >
      <!-- About Section -->
      <div>
        <h3 class="text-lg font-bold mb-3">About Us</h3>
        <p class="text-sm">
          Your trusted source for the latest media news, articles, and updates.
          We bring you quality content that informs and inspires.
        </p>
      </div>

      <!-- Quick Links -->
      <div>
        <h3 class="text-lg font-bold mb-3">Quick Links</h3>
        <ul class="text-sm space-y-2">
          <li><a href="#" class="hover:text-yellow-400">Home</a></li>
          <li><a href="#" class="hover:text-yellow-400">Articles</a></li>
          <li><a href="#" class="hover:text-yellow-400">Categories</a></li>
          <li><a href="#" class="hover:text-yellow-400">Contact Us</a></li>
        </ul>
      </div>

      <!-- Social Media -->
      <div>
        <h3 class="text-lg font-bold mb-3">Follow Us</h3>
        <ul class="flex space-x-4">
          <li>
            <a href="#" class="hover:text-yellow-400">
              <i class="fab fa-facebook"></i> Facebook
            </a>
          </li>
          <li>
            <a href="#" class="hover:text-yellow-400">
              <i class="fab fa-twitter"></i> Twitter
            </a>
          </li>
          <li>
            <a href="#" class="hover:text-yellow-400">
              <i class="fab fa-instagram"></i> Instagram
            </a>
          </li>
          <li>
            <a href="#" class="hover:text-yellow-400">
              <i class="fab fa-linkedin"></i> LinkedIn
            </a>
          </li>
        </ul>
      </div>

      <!-- Newsletter -->
      <div>
        <h3 class="text-lg font-bold mb-3">Newsletter</h3>
        <p class="text-sm mb-4">
          Subscribe to get the latest updates and articles directly to your
          inbox.
        </p>
        <form class="flex space-x-2">
          <input
            type="email"
            class="px-4 py-2 rounded bg-gray-700 text-gray-200 w-full focus:outline-none focus:ring focus:ring-yellow-400"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            class="bg-yellow-400 text-gray-800 px-4 py-2 rounded hover:bg-yellow-500 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

    <div class="text-center text-sm mt-8 border-t border-gray-700 pt-5">
      © 2025 Media Project. All rights reserved.
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
</style>