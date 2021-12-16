console.log("hallo hdhdhdhd");

import "./style.scss";

import Vue from "vue/dist/vue.common.dev";

new Vue({
  el: "#app",
  data: {
    message: "",
    items: ["pudru", "või", "jahu"],
  },
  computed: {
    reverseMessage: function () {
      return this.message.split("").reverse().join("");
    },
  },
  methods: {
    addItem() {
        if(this.message.trim() !== ''){
      this.items.push(this.message);
      this.message = "";
    }
    },
  },
});
