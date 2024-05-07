<script setup>
import Layaout from '@/components/layaout/layaout.vue'


</script>

<template>
   
 <body class="bg-gray-100 font-sans leading-normal tracking-normal">
      <div class="flex md:flex-row-reverse flex-wrap">
        <div class="w-full md:w-4/5 bg-gray-100">
            <div class="container bg-gray-100 pt-16 px-6">
                  <RouterView/>  
            </div>
            
         </div>
      <Layaout/> 
      </div>
  </body> 
</template>


