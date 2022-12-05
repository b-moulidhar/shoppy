<template>
<!-- <nav>
    <div class="cart_qty">
        <img src="../assets/cart_40px.png" alt=""/>
        <span class="badge badge-warning" id="lblCartCount">0</span>
    </div>
</nav> -->

<nav>
    <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>
        <div>
            <header class="cart_in_qty">
                <img src="../assets/cart_40px.png" alt=""/>
                <span class="badge badge-warning" id="lblCartCount">{{propers.length}}</span>
            </header>
            <hr>
            <div>
                <!-- <p>{{this.$store.state.qty}}</p> -->
                <div v-if="propers[0]==null">your cart is empty</div>
                <div v-else  v-for="(products,key) in this.$store.state.card" :key="key" class="cart_items">
                    <div>
                        <img v-bind:src="products.image" alt="">
                    </div>
                    <div class="cart_content">
                        <h2>{{products.style}}</h2>
                        <p>{{products.title}}</p>
                        <p>Quantity:{{this.$store.state.qty[key]}}</p>
                    </div>
                    <div class="cart_content2">
                        <button><span  @click="removedata(key)">X</span></button>
                        <p>${{products.price}}</p>
                        <div class="quantity">
                                <button v-if="number>0" @click="decrement(key)">-</button>
                                <button @click="increment(key)">+</button>
                                <!-- <button @click="removedata($event)">remove product</button> -->
                                <!-- <p>total : {{prices.price1}} </p> -->
                            
                        </div>
                        <!-- <p>total : {{cost[40]}} </p> -->
                    </div>
                </div>
                <div class="bottom">
                    <p>Total : ${{prices.price1.toFixed(2)}} </p>
                <!-- <button class="w-50 btn btn-dark btn-lg" type="submit" :on-click="prices"> check total</button> -->
                <button class="w-50 btn btn-dark btn-lg" type="submit" @click="persist" @mousedown="quantity"> checkout</button>
            </div>
            </div>
        </div>
    </div>
    <div class="cart_qty" @click="openNav"> 
        <img src="../assets/cart_40px.png" alt=""/>
        <span class="badge badge-warning" id="lblCartCount">{{propers.length}}</span>
    </div>
</nav>
</template>
<!-- <script>
localStorage.setItem()
</script> -->
<script>
// import {inject} from 'vue';
import '../css/header.css'
export default{
    name:'HeaderOne',
    data(){
        return{
            propers : this.$store.state.card,
            number:1,
            name:[],
            qnty:[]
            // t1:this.prices.price1,
            // cost : []
        }
    },
    created(){
        if(localStorage.name) 
            this.name = localStorage.name;
        if(localStorage.qnty) 
            this.qnty = localStorage.qnty;
    },
    // updated(){
    //     this.cost.push(this.prices.price1)
    // },
    mutations:{
       updated(){
        this.$store.state.card.commit('removedata') 
       }
    },
    methods:{
        openNav() {
            document.getElementById("mySidenav").style.width = "600px";
        },
        closeNav() {

            document.getElementById("mySidenav").style.width = "0";
        },
        persist() {
      localStorage.name = JSON.stringify(this.$store.state.card);   
     
    },
    quantity() {
      localStorage.qnty = JSON.stringify(this.$store.state.qty);   
     
    },
        removedata(key){
            // for(var i =0;i<this.propers.length;i++){
                this.$store.state.card.splice(key,1)
                console.log(JSON.stringify(this.$store.state.card)) 
             this.$store.state.qty.splice(key,1) 
             localStorage.name = JSON.stringify(this.$store.state.card)
             localStorage.name = JSON.stringify(this.$store.state.qty)

               
        //   }
        },
        increment(key){
           return this.$store.state.qty[key]++
        },
        decrement(key){
            if(this.$store.state.qty[key]>0){

                return this.$store.state.qty[key]-- 
            }
        },
    //     prices : function(){
    //         var price
    //         var qty = this.$store.state.qty
    //     this.$store.state.card.forEach((element,idx) => {
    //         // let item = this.$store.state.filproducts.find( i => i.id === element.id)
    //         price =(element[idx].price*qty[idx])
    //     });
    //     console.log(price)
    //     return{
    //         price1 : price
    //     } 
    // },
    //     persist() {
    //   localStorage.cartItem = this.$store.state.card;
    //   console.log('now pretend I did more stuff...');
    // }
        },
        computed:{
          prices: function(){
            var price=0
            // var costs = this.cost
            var cards = this.$store.state.card
            var qty = this.$store.state.qty
            // this.$store.state.card.forEach((element,idx) => {
            // // let item = this.$store.state.filproducts.find( i => i.id === element.id)
            // price =cards[idx].price*qty[idx]
        // });
        for(var i=0;i<cards.length;i++){
            price+=cards[i].price*qty[i]
        }
        return  {
            price1:Number(price)
        }
        // console.log()
    }
        },
        watch:{
    //         function(){        
    //             localStorage.setItem('cartitem',this.$store.state.card)
    //         }
    //     },
    //     mounted() {
    // if(localStorage.cartItem) this.$store.state.card = localStorage.cartItem;
// HeaderOne:{
//     handler() {
//       localStorage.setItem('books',JSON.stringify(this.books))
//     },
// },
  },
    }
</script>