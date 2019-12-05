const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola mundo con Vue',
        frutas: [
            {nombres:'Pera', cantidad:10},
            {nombres:'Manzana', cantidad:0},
            {nombres:'Platano', cantidad:11},
        ],
        nuevaFruta: '',
        total = 0
    },
    methods: {
        agregarFrutas () {
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad: 0
            });
            this.nuevaFruta = '';
        }
    },
    computed: {
        sumarFrutas () {
            this.total = 0;
            for(fruta in this.frutas){
                this.total = this.total + fruta.cantidad;
            }
            return this.total;
        }
    }
})