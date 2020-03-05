Vue.component('tabs',{
    props: ['activetab'],
    template : `<div>

                    <div class="tabs is-boxed">
                        <ul>
                        <li :class="{ 'is-active': active == 'pictures' }">
                        <a @click = "change('pictures')">
                        <span class="icon is-small"><i class="fas fa-image" aria-hidden="true"></i></span>
                        <span>Pictures</span>
                        </a>
                        </li>
                        <li :class="{ 'is-active': active == 'music' }">
                            <a @click = "change('music')">
                            <span class="icon is-small"><i class="fas fa-music" aria-hidden="true"></i></span>
                            <span>Music</span>
                            </a>
                        </li>
                        <li :class="{ 'is-active': active == 'videos' }">
                            <a @click = "change('videos')">
                            <span class="icon is-small"><i class="fas fa-film" aria-hidden="true"></i></span>
                            <span>Videos</span>
                            </a>
                        </li>
                        <li :class="{ 'is-active': active == 'documents' }">
                            <a @click = "change('documents')">
                            <span class="icon is-small"><i class="far fa-file-alt" aria-hidden="true"></i></span>
                            <span>Documents</span>
                            </a>
                        </li>
                        </ul>
                    </div>

                    <div>
                        <div v-if="active == 'pictures'">
                            <h1>This is the Pictures tab</h1>
                        </div>

                        <div v-else-if="active == 'music'">
                            <h1>This is the music tab</h1>
                        </div>

                        <div v-else-if="active == 'videos'">
                            <h1>This is the videos tab</h1>
                        </div>

                        <div v-else-if="active == 'documents'">
                            <h1>This is the documents tab</h1>
                        </div>

                    </div>

                </div>

                `,
    data() {
        return {
            active:'music'
        }
    },

    methods: {
        change(tab){
            this.active = tab;
        }

    }
});


Vue.component('tabss',{
    props: [],
    template : `
    <div>

        <div class="tabs">
            <ul>
                <li v-for = "tab in tabs" :class="{ 'is-active': tab.isActive }"><a @click = "change(tab.name)">{{ tab.name }}</a></li>
            </ul>
        </div>

        <div class="tab-details">
            <slot></slot>
        </div>

    </div>
                `,

    data() {
        return {
            test : 'hello',
            tabs:[]
        }
    },

    created() {
        this.tabs = this.$children;
    },

    methods: {
        change(tabname){
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == tabname);
            });
        }

    }
});

Vue.component('tab',{
    props: {
        name : {required:true},
        selected : {default:false}
    },
    template : `
        <div v-show = "isActive">
            <slot></slot>
        </div>
    
    `,
    data() {
        return {
            isActive: false
        };
    },

    mounted() {
        this.isActive = this.selected;
    },

});




new Vue({

    el:'#root',
    data: {
    }

 })