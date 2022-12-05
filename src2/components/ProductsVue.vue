<template>
  <div>
    <div class="col-xxl-3 col-xl-2 col-lg-2 col-md-3 col-sm-1"><ClothesSize v-on:val1="filtering($event)"/></div>
    <div  v-if="this.$store.state.filproducts[0]!=null" class="col-xxl-9 col-xl-10 col-lg-10 col-md-9 col-sm-11 container" >
      <h1 class="product_found">{{this.$store.state.filproducts.length}} product(s) found</h1>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col-xxl-3 col-sm-6 col-md-4 col-6 hh" v-for="user in this.$store.state.filproducts" :key="user.id">
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
                <p> {{JSON.stringify(user.availableSizes)}}</p>
              <div class="d-flex justify-content-between align-items-center">
              </div>
            </div>
            <button type="button" class="btn btn-dark" @click="$emit('addtocart',user)" @mouseup="$emit('qty',quantity)" @mousedown="$emit('persist',quantity)" @mouseleave="$emit('quantity',quantity)">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
    <div  v-else class="col-xxl-9 col-xl-10 col-lg-10 col-md-9 col-sm-11 container" >
      <h1 class="product_found">{{this.$store.state.products.length}} product(s) found</h1>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col-xxl-3 col-sm-6 col-md-4 col-6 hh" v-for="user in this.$store.state.temp" :key="user.id">
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
  </div>
</template>

<script>
import '../css/products.css'
import ClothesSize from './ClothesSize.vue';
export default {
  name:"ProductsApp",
data() {
  return {  
    selectedCategory : "",
    quantity:1,
    temp:[],
    arr:[1,2,3,4,5,6,7,8],
    filtered:[]
  }
},
components:{
  ClothesSize
},
methods:{
  // filtering(val){
  //     // console.log(val)
  //     // console.log(val.target.checked)
  //     // this.$store.state.products.forEach((element) => {
  //     //    element.availableSizes.forEach((val1)=>{ 
  //       // let str = this.$store.state.products
  //         this.filtered= this.$store.state.temp.filter((value)=>{ 
  //           return value.availableSizes.map((element)=>{
  //                   // element.availableSizes.map((val1)=>{
  //                     if(val==element){
  //                       return value.availableSizes
  //                     }else{
  //                       return element
  //                     }
  //                   // })
  //             })
  //   });
  //   // let filtered = this.arr.filter((val)=>{
  //   //       return val>4
  //   // })
  //   // console.log(val)
  //   console.log(this.filtered)
  
  //       //   })
  //       // });
  //       // console.log(this.$store.state.filproducts)
  //   },
  //   sizefil(val){
  //     return () => {
  //   let toKeep = false;
  //   val.forEach((wantedSize) => {
  //     if (shirt.size.toLowerCase() === wantedSize.toLowerCase()) toKeep = true;
  //   });
  //   return toKeep;
  // };
  //   }
  filtering(val){
      // console.log(val)
      this.$store.state.products.forEach((element) => {
         element.availableSizes.forEach((val1)=>{ 
           if(val===val1){
             let item = this.$store.state.temp.find( i => i.id === element.id)
             if(item){
                this.$store.state.filproducts.forEach((prod,idx1)=>{
                  // console.log(prod.availableSizes)
                  prod.availableSizes.forEach((prods)=>{
                    if(val===prods){
                      return this.$store.state.filproducts.splice(idx1,1)  
                    }
                  })
                })
              }else{
                return this.$store.state.filproducts.push(element)
              }
          }
          })
        });
        // console.log(this.$store.state.filproducts)
    },
  }
};
</script>
