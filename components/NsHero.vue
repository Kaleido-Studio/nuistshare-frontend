<template>
  <section
    class="w-full h-screen text-center col-span-4 bg-cover bg-no-repeat bg-left"
    style="
      background: linear-gradient(
          rgba(4, 25, 69, 0.4) 100%,
          rgba(0, 0, 0, 0.4) 100%
        ),
        url('/back.jpg');
      background-size: cover, cover;
    "
  >
    <div class="flex h-full flex-col justify-center items-center">
      <h4 class="text-white title-font text-8xl tracking-[0.5rem] leading-1">
        分享并获得学习资料
      </h4>
      <div class="b-3 border-[#fff] mt-10">
        <div
          class="transition-all duration-300 px-10 py-2 bg-[#ffffff20] backdrop-blur-8 rounded-full border-1 border-white! curser-pointer hover:bg-white/20"
        >
          <NuxtLink
            to="/entries"
            class="decoration-none text-white text-2xl title-font"
            >开始下载</NuxtLink
          >
        </div>
      </div>
    </div>
  </section>
</template>
