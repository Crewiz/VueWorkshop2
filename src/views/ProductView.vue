<template>
  <div class="product-view">
    <h2>Welcome to the Movie Buff Store!</h2>
    <p>Ever watched a movie and thought, "I wish I could buy that cool poster or that funky t-shirt the hero was wearing?" Well, wish no more! Welcome to the world's most exclusive (and imaginary) movie merchandise store!</p>
    
    <div class="products">
      <div class="product" v-for="product in products" :key="product.id">
        <h3>{{ product.name }}</h3>
        <img :src="product.image" :alt="product.name">
        <p>{{ product.description }}</p>
        <p class="price">Price: {{ product.price }}</p>
        <button>Add to Cart (Not really, but let's pretend!)</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import blueVelvetImage from '@/assets/bluevelvet.jpg';
import lifeIsBeautifulImage from '@/assets/lifeisbeautiful.jpg';
import spiritedAwayImage from '@/assets/spiritedaway.jpg';
import johnWickImage from '@/assets/johnwick.jpg';

const products = ref([
  { id: 1, name: 'Blue Velvet Poster', image: blueVelvetImage, description: 'A mysterious and captivating poster from Blue Velvet. Perfect for any wall!', price: '$19.99' },
  { id: 2, name: 'Life is Beautiful T-shirt', image: lifeIsBeautifulImage, description: 'Wear the joy and sorrow of this beautiful movie.', price: '$29.99' },
  { id: 3, name: 'Spirited Away Collectible Figurine', image: spiritedAwayImage, description: 'Own a piece of the magic with this exquisite figurine.', price: '$39.99' },
  { id: 4, name: 'John Wick Action Figure', image: johnWickImage, description: 'An action figure for the action fan in you.', price: '$24.99' },
]);
</script>


<style>
.product-view {
  text-align: center;
  padding: 2rem;
}

.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.product {
  border: 1px solid #ddd;
  padding: 1rem;
  margin: 1rem;
  width: 200px;
}

.product img {
  max-width: 100%;
  height: auto;
}

.price {
  color: green;
}
</style>
