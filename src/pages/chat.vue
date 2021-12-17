<template>
  <div>
    <input type="text" v-model="message" /><button @click="send">ssaada</button>
    <ul>
      <li v-for="(text, index) in messages" :key="index">{{ text }}</li>
    </ul>
  </div>
</template>

<script>
export default {
    mounted(){
        // Create WebSocket connection.
this.ws = new WebSocket('ws://localhost:8080');

// Connection opened
this.ws.addEventListener('open', function (event) {
    //this.ws.send('Hello Server!');
});

// Listen for messages
this.ws.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
    this.messages.push(event.data);
});
    },

data(){
    ws: null,
    message; '',
    messages; []
    },
}

</script>

<style>
</style>