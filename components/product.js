Vue.component('product',{
    template: '../product.html',
    data: {
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
    },
    methods: {
        updateImage(image) {
            this.image1 = image
        }
    }
});