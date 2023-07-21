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

    <!-- create a search bar -->
    <div class="flex w-[4rem] justify-between">
      <div class="search hover:cursor-pointer hover:opacity-60 inline-flex">
        <img width="25" height="25" src="/search.svg" />
      </div>
    </div>
  </header>
</template>
