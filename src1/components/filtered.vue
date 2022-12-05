<template>
    <div class="container" >
      <h1 class="product_found">{{this.$store.state.filproducts.length}} product(s) found</h1>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <!-- <p>{{detail}}</p> -->
        <div class="col-xxl-3 col-sm-6 col-md-4 col-6 hh" v-for="(user,key) in this.$store.state.filproducts" :key="key">
          <div class="card shadow-sm">
            <!-- <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false" _mstaria-label="470535" style="direction: ltr; text-align: left;"><title _mstHash="1686555" _mstTextHash="177515">Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em" _mstHash="2151045" _mstTextHash="134056">Thumbnail</text></svg> -->
            <div class="img-bck">
              <img class="models" v-bind:src="user.image" alt="image1"/>
              <p v-if="user.isFreeShipping" class="free">free shipping</p>
            </div>
            <div class="card-body">
              <p class="card-text" _msthash="1937507" _msttexthash="9192963" style="direction: ltr; text-align: center;">
                {{user.style}}</p>
              <p class="line_after" _msthash="1937507" _msttexthash="9192963" style="direction: ltr; text-align: center; font-weight:bold">
                {{"$"+user.price}}</p>  
              <p class="installments" _msthash="1937507" _msttexthash="9192963" style="direction: ltr; text-align: center;">
                  {{"or "+user.installments + " x" +( user.price/user.installments).toFixed(2)}}</p>
              <div class="d-flex justify-content-between align-items-center">
              </div>
            </div>
            <button type="button" class="btn btn-dark" @click="$emit('addtocart',user)" @mouseup="$emit('qty',quantity)" @mousedown="$emit('persist',quantity)">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // import details from "../data.json";
  // import { inject } from "vue";
  import '../css/products.css'
  
  export default {
    name:"FilteredApp",
  data() {
    return {  
      // detail: this.$store.state.products,
      selectedCategory : "",
      quantity:1,
      number:0,
      fills:this.$store.state.filproducts
      // title : inject('name'),
    };
  },
  computed:{
    // datas(){
    //   return this.detail.map((val)=>{
    //     return val
    //   })
    // },
    // divide(){
    //   return this.detail.map((val)=>{
    //     return {
    //       first:val.price,
    //       last : val.price
    //     }
    //   })
    // }
    // filteredPeople: function() {
      // 		// var vm = this;
      // 		// var category = vm.selectedCategory;
    //     // let style = this.detail.style
      // 		return this.detail.map((val)=>{
    //       if(this.selectedCategory === "All"){ 
    //         return val;
    //       } 
    //       // else {
    //       //   return val.filter(function(person) {
    //       //     return person.style === style;
    //       //   });
    //       // }
    //     })
      // 	}
  }
  };
  </script>

  