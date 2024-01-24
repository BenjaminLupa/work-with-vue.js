const app = Vue.createApp({
  data() {
    return {
      redValue: "255",
      greenValue: "0",
      blueValue: "255",
      hexaNumber: "#ff69b4",
    };
  },
  computed: {},
  methods: {
    changeColor(color, colorVal) {
      document.documentElement.style.setProperty(`--${color}`, colorVal);
      this.convertRgb();
    },
    convertRgb() {
      //4
      let redVal = this.redValue;
      let greenVal = this.greenValue;
      let blueVal = this.blueValue;
      let hexColorCode =
        "#" +
        this.getHexa(redVal) +
        this.getHexa(greenVal) +
        this.getHexa(blueVal);
      this.hexaNumber = hexColorCode;
    },
    getHexa(value) {
      //4
      let hexa = parseInt(value).toString(16);
      return hexa.length == 1 ? "0" + hexa : hexa;
    },
  },
}).mount("#app");
