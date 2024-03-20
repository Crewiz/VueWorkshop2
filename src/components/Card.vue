<template>
  <div class="card">
    <img :src="image" :alt="title" class="card-image">
    <h3>{{ title }}</h3>
    <p v-show="showDescription">{{ description }}</p> 
    <button @click="toggleDescriptionAndEmitClick">More info</button> 
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
  title: String,
  description: String,
  image: String,
});

const emit = defineEmits(['card-click']);

const showDescription = ref(false);

const toggleDescriptionAndEmitClick = () => {
  showDescription.value = !showDescription.value;
  emit('card-click', { title: props.title, description: props.description });
};
</script>


<style scoped>
.card {
  display: flex; 
  flex-direction: column; 
  align-items: center;
  justify-content: center; 
  border: 1px solid #eee;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  margin: auto;
  max-width: 300px; 
}

.card-image {
  width: 100%; 
  height: auto; 
  margin-bottom: 20px;
}

</style>

