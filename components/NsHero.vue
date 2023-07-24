<template>
  <section
    class="w-full h-screen text-center col-span-4 bg-cover bg-no-repeat bg-left"
    style="
      background: linear-gradient(
          to top,
          #f6f6f6 0%,
          rgba(255, 255, 255, 0.4) 100%
        ),
        url('/back.png');
      background-size: cover, cover;
    "
  >
    <div class="flex h-full flex-col justify-center items-center">
      <h4 class="text-black title-font text-8xl tracking-[0.5rem] leading-1">
        分享并获得学习资料
      </h4>
      <form class="b-1 pt-6">
        <button
          class="transition-all duration-300 px-10 text-white py-2 text-xl bg-[#171717] hover:bg-transparent hover:text-black rounded-[0.5rem] border-2 border-gray-600"
        >
          <a href="#start" class="decoration-none font-bold">开始下载</a>
        </button>
      </form>
    </div>
  </section>
</template>
