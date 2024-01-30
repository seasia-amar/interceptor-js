<template>

<header class="bg-blue-400 h-[60px] w-full flex items-center justify-between pe-5">
<div>
<h2 class="ml-5 text-xl font-bold text-white">Crud Node</h2>
</div>
<div class="flex">
<router-link 
      to="/"
      type="submit"
      class="text-blue-500 border-blue-600 bg-white hover:shadow-lg mx-5 font-semibold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
    >
      Login
    </router-link>
    <router-link 
      to="/register"
      type="submit"
      class="text-blue-500 border-blue-600 bg-white hover:shadow-lg  font-semibold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
    >
      Signup
    </router-link>
</div>
</header>
</template>

