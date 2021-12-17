<template>
  <div class="container mt-3">
    <div>
      <input type="text" v-model="message" />
      <button class="btn btn-primary" @click="addItem">vajuta</button>
      <p>{{ reverseMessage }}</p>
      <ul>
        <li v-for="(item,index) in items" :key="index">{{ item }}</li>
      </ul>
       <button class="btn btn-primary" :disabled="btnDisabled" @mouseover="btn2Disabled = false;btnDisabled=true">vajuta</button>
       <button class="btn btn-primary" :disabled="btn2Disabled" @mouseover="btn2Disabled = true;btnDisabled=false">vajuta</button>
       <input  :type="inputType"> <button class="btn btn-primary"  @click="inputType='password'">muuuda</button>
       <button  :class="btnClass" >värv</button>
    </div>
    <h1>Tere osakene</h1>
  </div>
</template>

<script>
export default {
  data() {
      return {
    message: "",
    items: ["pudru", "või", "jahu"],
    btnDisabled: false, 
    btn2Disabled: false, 
    inputType: 'text',
    btnClass:' btn btn-primary',
    isDanger: false
    }
  },
  computed: {
    reverseMessage: function () {
      return this.message.split("").reverse().join("");
    }
  },
  methods: {
    addItem() {
      if (this.message.trim() !== "") {
        this.items.push(this.message);
        this.message = "";
      }
    }
  }
};
</script>

<style>
</style>