<template>
  <section
    class="w-full h-screen text-center col-span-4 bg-cover bg-left"
    style="background-image: url('/back.jpg')"
  >
    <div class="flex h-full flex-col justify-center items-center">
      <h4 class="text-white title-font text-8xl tracking-[0.5rem] leading-1">
        分享并获得学习资料
      </h4>
      <div
        class="transition-all duration-300 px-10 py-2 bg-transparent backdrop-blur-8 rounded-full border-9! border-white! curser-pointer hover:bg-white/20 mt-10"
      >
        <NuxtLink to="/entries" class="decoration-none text-white text-base"
          >开始下载</NuxtLink
        >
      </div>
    </div>
  </section>
</template>
