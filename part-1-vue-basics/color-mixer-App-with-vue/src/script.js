const app = Vue.createApp({
  data() {
    return {
      redValue: "255",
      greenValue: "0",
      blueValue: "255",
      hexaNumber: "#ff69b4",
    };
  },
  computed: {
    changeColor() {
      return `--redValue: ${this.redValue}; --greenValue: ${this.greenValue}; --blueValue: ${this.blueValue}`;
    },
    convertRgb() {
      let hexColorCode =
        "#" +
        this.getHexa(this.redValue) +
        this.getHexa(this.greenValue) +
        this.getHexa(this.blueValue);
      return (this.hexaNumber = hexColorCode);
    },
  },
  methods: {
    getHexa(value) {
      //4
      let hexa = parseInt(value).toString(16);
      return hexa.length == 1 ? "0" + hexa : hexa;
    },
  },
}).mount("#app");
