Vue.component('product',{
    template: `<div class="container">
        <div class="row">
            <div class="col-md 3">
                <img v-bind:src="image1" alt="" width="400px">
            </div>
            <div class="col-md 3">
                <h1>{{product}}</h1>
                <!-- IF operatoru  -->
                <h2 v-if="lubov">Lubov sexy</h2>
                <h2 v-else>Lubov not sexy</h2>
                <!-- FOR operatoru -->
                <h2 v-for="item in datails">{{item}}</h2>
                <hr>
                <div v-for="item in variants" style="color: red">
                    <h3 @mouseover="updateImage(item.imageVariant)">
                        {{item.variant}}
                    </h3>
                </div>
            </div>
        </div>
    </div>`,
    data(){
        return{
            product: "salam",
            image1: 'assets/images/bir.jpg',
            lubov: true,
            datails: ['sexy', 'very sexy', 'very very sexy'],
            variants: [
                {
                    'id': '1',
                    'variant': 'variant1',
                    'imageVariant': 'assets/images/bir.jpg',
                },
                {
                    'id': '2',
                    'variant': 'variant2',
                    'imageVariant': 'assets/images/eki.jpg',
                },
                {
                    'id': '3',
                    'variant': 'variant3',
                    'imageVariant': 'assets/images/uch.jpg',
                },
            ]
        }

    },
    methods: {
        updateImage(image) {
            this.image1 = image
        }
    }

});



var main = new Vue({
    el: '#app',
});