Vue.component('result',{
    props: ['labeltext'],
    template : '<h1>You have clicked {{labeltext}} times</h1>'
});

Vue.component('test', {
    data() {
        return {
            nclick : 0
        }
    },
    template: '<button @click = "count">Click</button>',
    methods: {
        count(){
            this.nclick+=1;
            console.log(this.nclick);
            this.$emit('setevent',this.nclick);
        }

    }
});

Vue.component('card',{
    data() {
        return {
            text : 5
        }
    },
    template : '<div class="box"><result :labeltext = "text"></result><test  @setevent = "set"></test></div>',
    methods: {
        set(n){
            this.text = n;
        }
    }
});



new Vue({

    el:'#root',
    data: {
        
    }

 })