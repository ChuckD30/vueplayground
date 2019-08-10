new Vue({
    el: '#root',
    data:{
        output: ""
    },
    methods: {
        readRefs: function(){
            this.output = this.$refs.input.value;
            console.log(this.$refs.test.innerText[0]);
            console.log(this.$refs);
            
        }
    }
})