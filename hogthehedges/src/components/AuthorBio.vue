<template>
  <div class="flex flex-col min-h-screen bg-cover bg-center" :style="backgroundStyle">
    <!-- Author Bio Section (Top Third) -->
    <div
      class="flex flex-col items-center justify-center p-10 w-full h-1/3 relative bg-black bg-opacity-50"
    >
      <!-- Author Image -->
      <img
        src="../assets/sebby.jpg"
        alt="Sebby Webbers"
        class="w-56 h-56 rounded-full border-4 border-indigo-200 shadow-xl mb-8 transition-transform duration-300 ease-in-out hover:scale-105"
      />

      <!-- Author Name -->
      <h2 class="text-4xl font-extrabold text-white text-center mb-4 drop-shadow-lg">
        Sebby Webbers
      </h2>

      <!-- Author Bio -->
      <p class="text-lg text-white text-center leading-relaxed mb-6 drop-shadow-lg">
        Meet Sebby Webbers – a passionate storyteller who takes you on thrilling adventures. Every
        book is a new world full of wonder, drama, and unforgettable characters. Ready to get lost
        in a page-turner? Sebby’s stories await!
      </p>

      <!-- Social Media Links -->
      <div class="flex space-x-6 justify-center">
        <a
          href="https://twitter.com/johndoe"
          target="_blank"
          class="text-3xl text-blue-500 hover:text-blue-700 transition-colors duration-200"
        >
          <i class="pi pi-twitter"></i>
        </a>
        <a
          href="https://linkedin.com/in/johndoe"
          target="_blank"
          class="text-3xl text-blue-700 hover:text-blue-800 transition-colors duration-200"
        >
          <i class="pi pi-linkedin"></i>
        </a>
        <a
          href="https://github.com/johndoe"
          target="_blank"
          class="text-3xl text-gray-800 hover:text-gray-900 transition-colors duration-200"
        >
          <i class="pi pi-github"></i>
        </a>
      </div>
    </div>

    <!-- Books and Dogs Section (Bottom Two-Thirds) -->
    <div class="w-full h-2/3 bg-white p-12">
      <!-- Book List -->
      <h2 class="text-3xl font-semibold text-gray-800 mb-6 text-center">Books by Sebby</h2>
      <ul class="space-y-6 text-lg text-gray-600">
        <li
          class="transition-all duration-300 hover:bg-indigo-100 p-4 rounded-lg shadow-lg hover:text-indigo-500"
        >
          <strong class="text-xl">Hellhound Hunt</strong> – An action-packed adventure filled with
          mystery, suspense, and otherworldly creatures. Join the hunt and unravel the secrets of
          the underworld.
        </li>
        <li
          class="transition-all duration-300 hover:bg-indigo-100 p-4 rounded-lg shadow-lg hover:text-indigo-500"
        >
          <strong class="text-xl">An Anthology (Not Yet Named)</strong> – A collection of short
          stories that take you on journeys through different realms. Each story is a unique tale,
          yet all share a common thread of deep emotional connections and unexpected twists.
        </li>
      </ul>

      <!-- Dog Pictures Section -->
      <div class="mt-12 flex justify-between">
        <div class="w-1/2 p-2">
          <img src="../assets/dog1.jpg" alt="Muppet" class="w-full h-auto rounded-xl shadow-2xl" />
        </div>
        <div class="w-1/2 p-2">
          <img src="../assets/dog2.jpg" alt="Henry" class="w-full h-auto rounded-xl shadow-2xl" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Import background image here (optional if using inline style for image URL)
import backgroundImg from '../assets/background.jpg' // If using Vue or webpack

const backgroundStyle = {
  backgroundImage: `url(${backgroundImg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed', // Make sure the background stays fixed
}
</script>

<style scoped>
/* Scoped styling for the component */
img {
  max-width: 100%;
}

h2 {
  font-size: 2.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

ul {
  padding-left: 20px;
}

li {
  color: #333;
  font-size: 1.1rem;
  padding: 1rem;
  border-radius: 8px;
}

a:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}

li:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

/* Customizing links and hover effects */
a {
  transition: color 0.3s ease;
}

/* Adding drop shadow to text for better visibility */
.drop-shadow-lg {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
}

/* Ensuring full-page background */
.bg-cover {
  background-size: cover;
}

.bg-center {
  background-position: center;
}

.bg-black {
  background-color: rgba(0, 0, 0, 0.5); /* Black overlay for readability */
}
</style>
