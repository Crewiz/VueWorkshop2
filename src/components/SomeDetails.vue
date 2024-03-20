<template>
  <div v-if="movie">
    <h1>{{ movie.title }}</h1>
    <p>{{ movie.description }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const movie = ref(null);
const route = useRoute();

onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:3000/movies/${route.params.id}`);
    movie.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
</script>
