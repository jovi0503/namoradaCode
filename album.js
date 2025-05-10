new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "images/1.jpeg",
          img2: "images/2.jpeg",
          img3: "images/3.jpeg",
          title: "Casal",
          isOpen: false,
        },
        {
          img1: "images/4.jpeg",
          img2: "images/5.jpeg",
          img3: "images/6.jpeg",
          title: "Fofos",
          isOpen: false,
        },
        {
          img1: "images/7.jpeg",
          img2: "images/8.jpeg",
          img3: "images/9.jpeg",
          title: "Babies",
          isOpen: false,
        },
        {
          img1: "images/10.jpeg",
          img2: "images/11.jpeg",
          img3: "images/12.jpeg",
          title: "Juntos",
          isOpen: false,
        },
        {
          img1: "images/13.jpeg",
          img2: "images/14.jpeg",
          img3: "images/15.jpeg",
          title: "Te amo",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
      setTimeout(() => {
        window.location.href = "index2.html";
      },3000);
       
    },
  },
});
