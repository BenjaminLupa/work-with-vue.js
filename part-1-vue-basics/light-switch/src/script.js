// const btn = document.querySelector("button");
// const body = document.querySelector("body");
// const title = document.getElementsByTagName("title");

// function buttonClick() {
//   btn.classList.toggle("buttonBlack");
//   body.classList.toggle("bodyBack");
//   if (document.title !== "Good Night") {
//     document.title = "Good Night";
//   } else {
//     document.title = "Good Morning";
//   }
// }

// btn.addEventListener("click", buttonClick);

const app = Vue.createApp({
  data() {
    return {
      btnTxt: "Toggle Light",
      toggler: true,
      onClassNameBody: "bodyBack",
      onClassName: "buttonBlack",
    };
  },
  computed: {
    buttonText() {
      if (this.toggler) {
        this.btnTxt = "Good Morning";
      } else {
        this.btnTxt = "Good Night";
      }
    },
  },
  methods: {
    toggleBtn() {
      const btn = document.querySelector("button");
      this.toggler = !this.toggler;
      if (this.toggler) {
        this.buttonText;
        document.body.classList.remove(this.onClassNameBody);
        btn.classList.remove(this.onClassName);
      } else if (!this.toggler) {
        this.buttonText;
        document.body.classList.add(this.onClassNameBody);
        btn.classList.add(this.onClassName);
      }
    },
  },
}).mount("#app");
