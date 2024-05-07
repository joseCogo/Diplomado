
<template>
    <!DOCTYPE html>
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Tailwind Starter Template - Responsive Header : Tailwind Toolbox</title>
      <meta name="author" content="name">
      <meta name="description" content="description here">
      <meta name="keywords" content="keywords,here">
      <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"/>
      
      <link href="https://afeld.github.io/emoji-css/emoji.css" rel="stylesheet">
     
	  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
   </head> 
   
    
		 
		 <!--Main Content-->
        
        
        
		 <!--Sidebar-->
          <div class="w-full md:w-1/5 bg-gray-900 md:bg-gray-900 px-2 text-center fixed bottom-0 md:pt-8 md:top-0 md:left-0 h-16 md:h-screen md:border-r-4 md:border-gray-600">
            <div class="flex-col md:relative mx-auto lg:float-right lg:px-6">
               <ul class="list-reset flex flex-row md:flex-col text-center md:text-left">
                  <li class="mr-3 flex-1">
                     <a class="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500">
                     <i class="fas fa-link pr-0 md:pr-3"></i><router-link class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block" to="/Actividad1">Actividad 1</router-link>
                     </a>
                  </li>
                  <li class="mr-3 flex-1">
                     <a href="#" class="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500">
                     <i class="fas fa-link pr-0 md:pr-3"></i><router-link class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block" to="/Actividad2">Actividad 2</router-link>
                     </a>
                  </li>
               </ul>
            </div>
         </div>
   
</template>