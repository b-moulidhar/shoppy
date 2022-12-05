<template>
    <div class="filter">
        <h2 class="heading_size">Sizes :</h2>
        <ul>
            <li  v-for="(size,key) in sizes" :key="key">
              
              <input @change="$emit('val1',size)" type="checkbox" :id="key" name="check_2"  value="check_2">
              <label :for="key" @change="$emit('val2',key)">{{size}}</label>
            
            </li>
          </ul>
    </div>
</template>
  
<script>
 import '../css/clothsize.css'
  export default{
    name : 'ClothesSize',
    data(){
    return {sizes : ['XS','S','M','ML','L','XL','XXL','X'],
  }}
  }
</script>
  
<style>
   
   
</style>
