<template>
  <header
    class="flex flex-row item-center border-b-gray-300 border-b dummy lg:justify-around justify-between px-4 fixed left-0 right-0 bg-white/30 backdrop-blur-sm top-0"
  >
    <!-- create a title and a search bar -->
    <h1>
      <a
        href="/"
        class="text-white tracking-[0.1rem] title-font decoration-none sm:text-3xl text-2xl"
        >Nuistshare</a
      >
    </h1>

    <div class="flex flex-row items-center">
      <NuxtLink to="/entries" >
        <h1 class="text-white text-xl">
          全部
        </h1>
      </NuxtLink>
    </div>
  </header>
</template>
