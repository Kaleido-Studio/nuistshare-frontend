<template>
  <section
    class="w-full h-screen text-center col-span-4 bg-cover bg-no-repeat bg-left"
  >
    <div class="flex h-full flex-col justify-center items-center">
      <h1 class="text-black title-font lg:text-8xl sm:text-5xl text-6xl tracking-[0.5rem]">
        NuistShare
      </h1>
      <h2>
        一个资源分享平台
      </h2>
      <form class="b-1 pt-6">
        <button
          class="transition-all duration-300 px-10 text-white py-2 text-xl bg-[#171717] hover:bg-transparent hover:text-black rounded-[0.5rem] border-2 border-gray-600"
          @click.prevent
        >
          <NuxtLink to="/archives/entries" class="decoration-none font-bold">
            开始下载
          </NuxtLink>
        </button>
      </form>
    </div>
  </section>
</template>
