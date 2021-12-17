<template>
  <div class="container mt-3">
    <div v-show="show">
      <button
        class="btn btn-primary"
        @click="prev"
        :disabled="!pagination.prev"
      >
        prev
      </button>
      <button
        class="btn btn-primary"
        @click="next"
        :disabled="!pagination.next > next"
      >
        next
      </button>
      <div class="row row-cols-5">
        <div class="col mb-4" v-for="(char, index) in characters" :key="index">
          <card :title="char.name" :img="char.image"
            ><b>status:</b>{{ char.status }}<br />
            <b>klass:</b>{{ char.species }}<br />
            <b>sugu:</b>{{ char.gender }}<br />
            <a :href="'/#/char/'+ char.id">loe veel</a>
          </card>
        </div>
      </div>
    </div>
    <button class="btn btn-primary" @click="show = !show">näita</button>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import axios from "axios";
export default {
  components: { Card },
  created() {
    axios.get("https://rickandmortyapi.com/api/character").then((response) => {
      this.characters = response.data.results;
      this.pagination = response.data.info;
    });
  },
  data() {
    return {
      characters: [],
      pagination: {
        prev: null,
        next: null,
      },

      show: true,
    };
  },
  methods: {
    prev() {
      axios.get(this.pagination.prev).then((response) => {
        this.characters = response.data.results;
        this.pagination = response.data.info;
      });
    },

    next() {
      axios.get(this.pagination.next).then((response) => {
        this.characters = response.data.results;
        this.pagination = response.data.info;
      });
    },
  },
};
</script>

<style>
</style>