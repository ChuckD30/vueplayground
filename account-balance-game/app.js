new Vue({
  el: "#root",
  data: {
    health: 100,
    sad: false,
    unsafe: false,
    messageFull: "Your account done full boss",
    messageEmpty: "Your account don empty bros"
  },
  methods: {
    debit: function(){
      this.health -= 10

      if(this.health <= 50) {
        this.unsafe = true;
        this.sad = true;
      }
    },

    credit: function(){
      this.health += 10

      if(this.health >= 50) {
        this.unsafe = false;
        this.sad = false;
      }
    }
  },
  computed: {
    }
});