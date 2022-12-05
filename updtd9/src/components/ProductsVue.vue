<template>
  <div class="container" >
    <h1 class="product_found">{{this.$store.state.products.length}} product(s) found</h1>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div class="col-xxl-3 col-sm-6 col-md-4 col-6 hh" v-for="user in this.$store.state.products" :key="user.id">
        <div class="card shadow-sm">
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
          <button type="button" class="btn btn-dark" @click="$emit('addtocart',user)" @mouseup="$emit('qty',quantity)" @mousedown="$emit('persist',quantity)" @mouseleave="$emit('quantity',quantity)">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../css/products.css'
export default {
  name:"ProductsApp",
data() {
  return {  
    selectedCategory : "",
    quantity:1
  };
},
};
</script>
