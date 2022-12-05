<template>
  <div>
    <HeaderOne/>
    <!-- {{temp}} -->
    <div class="row section_2 container">
      <!-- <div class="col-xxl-3 col-xl-2 col-lg-2 col-md-3 col-sm-1"><ClothesSize v-on:val1="filtering($event)"/></div> -->
      <!-- <div v-if="this.$store.state.filproducts[0]!=null" ><FilteredApp v-on:addtocart="products($event)" v-on:qty="qty($event)" v-on:persist="persist"/></div> -->
      <div><ProductsVue v-on:addtocart="products($event)" v-on:qty="qty($event)"/></div>
    </div>
  </div>
</template>
<script>
import HeaderOne from './components/HeaderOne.vue'
// import ClothesSize from './components/ClothesSize.vue'
import ProductsVue from './components/ProductsVue.vue';
// import FilteredApp from './components/filtered.vue';

export default {
  name: 'NameApp',
  created(){
    this.$store.dispatch('getProductsAction')
    if(localStorage.name) 
    this.name = localStorage.name;
    if(localStorage.qnty) 
    this.qnty = localStorage.qnty;
  },
  mounted(){
    //  console.log(this.$store.state.filproducts)
    this.$store.dispatch('getTempAction')
    
  },
  mutations:{
       updated(){
       this.$store.commit('products')
       }
    },
  data(){
    return{
      size : [],
      qtys: this.qty,
      name:[],
      qnty:[],
      temp: []
    }
  },
  components: {
    HeaderOne,
    // ClothesSize,
    ProductsVue,
    // FilteredApp
  },
  methods:{
    persist() {
      localStorage.name = JSON.stringify(this.$store.state.card);   
    },
    quantity() {
      localStorage.qnty = JSON.stringify(this.$store.state.qty);    
    },
    products(person){
      let item = this.$store.state.card.find( i => i.id === person.id)
      if(item){
        return this.$store.state.qty
      }else{
        return this.$store.state.card.push(person)
      }
      
    },
    sizes(val){
      return this.size.push(val)
    },
    filtering(val){
      this.$store.state.products.forEach((element) => {
         element.availableSizes.forEach((val1)=>{ 
           if(val===val1){
             let item = this.$store.state.temp.find( i => i.id === element.id)
             if(item){ 
              this.$store.state.temp.map((prod,idx1)=>{
                  // console.log(prod.availableSizes)
                  prod.availableSizes.map((prods)=>{
                    console.log(prods)
                    if(val===prods){ 
                      return this.$store.state.filproducts.push(this.$store.state.temp.splice(idx1,1))
                    }
                  })
                })
              }else{
                return this.$store.state.temp.push(element)
              }
          }
          })
        });
        // console.log(this.$store.state.filproducts)
    },
    qty(qnty){   
      if( this.$store.state.qty.length<=this.$store.state.card.length ){
         this.$store.state.qty.push(qnty)
      }else{
        return this.$store.state.qty
      }     
    }
  }
}
</script>
<style>
  .section_2{
    margin: 50px auto;
  }

  @media screen and (max-width : 820px) {
    
  }
</style>
