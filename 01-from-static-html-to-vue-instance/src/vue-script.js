const name = Vue.createApp({
  data() {
    return {
      userName: "John Doe",
      time: new Date().toLocaleString("en-us"),
    };
  },
}).mount(".card");
