<template>
  <div>
    <Card
      v-for="card in cardList"
      :key="card.id"
      v-bind="card"
      @card-click="handleCardClick"
    >
      <template v-slot:button>
        <button>More info</button>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Card from '../components/Card.vue'

import blueVelvetImage from '@/assets/bluevelvet.jpg';
import lifeIsBeautifulImage from '@/assets/lifeisbeautiful.jpg';
import spiritedAwayImage from '@/assets/spiritedaway.jpg';
import johnWickImage from '@/assets/johnwick.jpg';

const cardList = ref([
  { 
    id: 1, 
    title: 'Blue Velvet', 
    description: 'A dark mystery unveiling suburban Americas seedy underbelly through a young mans discovery.',
    image: blueVelvetImage 
  },
  { 
    id: 2, 
    title: 'Life is Beautiful', 
    description: 'A touching story of a fathers love and humor protecting his son in a Nazi camp.', 
    image: lifeIsBeautifulImage
  },
  { 
    id: 3, 
    title: 'Spirited Away', 
    description: 'A girls enchanting journey in a spirit world, striving to save her transformed parents.', 
    image: spiritedAwayImage
  },
  { 
    id: 4, 
    title: 'John Wick', 
    description: 'A relentless action-packed tale of a former hitman avenging the wrongs done to him.', 
    image: johnWickImage
  },

]);


const handleCardClick = (cardInfo) => {
  console.log(`Card clicked: ${cardInfo.title}`);
  console.log(`Description: ${cardInfo.description}`);
};
</script>

<style>
.base-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
