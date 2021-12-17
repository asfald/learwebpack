<template>
  <card v-if="char" :title="char.name" :img="char.image"
    ><b>status:</b>{{ char.status }}<br />
    <b>klass:</b>{{ char.species }}<br />
    <b>sugu:</b>{{ char.gender }}<br />

  </card>
</template>

<script>
import axios from 'axios';
import Card from '../components/Card.vue'
export default {
    components:{ Card },
    created(){
         axios.get('https://rickandmortyapi.com/api/character/' +this.$route.params.id).then((response) => {
      this.char = response.data
    });

    },
    data(){
        return{
            char:null
        }
    }
};
</script>

<style>
</style>