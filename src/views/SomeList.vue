<template>
  <div>
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        <router-link :to="`/movie/${movie.id}`">{{ movie.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const movies = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/movies');
    movies.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
</script>
