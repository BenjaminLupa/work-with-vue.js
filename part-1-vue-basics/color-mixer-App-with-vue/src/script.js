/*
1) Elemente aus Html übergeben
2) Farbe des Main & Header ändern
2.1) Einen EventListener erstellen der auf alle Slider zugreift.
2.2) Die Values der Farben red, green & blue und die CSS variable an eine Function übergeben.
2.3) Function erstellen um die CSS Variablen im root zu ändern.
3) red green & blue .values in rgbNum.innerText um rgb auszugeben
4) das rgb als Hexadezimal ausgeben
*/

// const red = document.querySelector("#red"); //1
// const green = document.querySelector("#green"); //1
// const blue = document.querySelector("#blue"); //1
// const slider = document.querySelector("header"); //1
// const rgbNum = document.querySelector("#rgbNum"); //1
// const hexaNum = document.querySelector("#hexaNum");

// slider.addEventListener("input", function () {
//   //2.1
//   changeColor("--redValue", red.value); //2.2
//   changeColor("--greenValue", green.value); //2.2
//   changeColor("--blueValue", blue.value); //2.2;
//   rgbNum.innerText =
//     "rgb(" + red.value + ", " + green.value + ", " + blue.value + ")";
//   convertRgb();
// });
// function changeColor(customColor, colorValue) {
//   //2.3
//   document.documentElement.style.setProperty(customColor, colorValue);
// }

// function convertRgb() {
//   //4
//   let redVal = red.value;
//   let greenVal = green.value;
//   let blueVal = blue.value;
//   let hexColorCode =
//     "#" + getHexa(redVal) + getHexa(greenVal) + getHexa(blueVal);
//   hexaNum.innerText = hexColorCode;
// }
// function getHexa(value) {
//   //4
//   let hexa = parseInt(value).toString(16);
//   return hexa.length == 1 ? "0" + hexa : hexa;
// }

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
