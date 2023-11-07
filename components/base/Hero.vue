<template>
  <section
    class="w-full h-screen text-center col-span-4 bg-cover bg-no-repeat bg-left"
  >
    <div class="flex h-full flex-col justify-center items-center">
      <h1 class="text-black title-font lg:text-[100px] sm:text-6xl text-5xl tracking-[0.5rem] whitespace-pre">
        NuistShare {{ "\n" }} 资料共享平台
      </h1>
      <h2 class="font-bold text-[1.2rem]">
        一个资源分享平台,支持登陆上传
      </h2>
      <h2 class="font-normal! text-[1.2rem]">
        赠人玫瑰，手有余香
      </h2>
      <form class="b-1 pt-6">
        <button
          class="transition-all duration-300 px-8 text-white py-3 text-[1.1rem] bg-[#171717] hover:bg-transparent hover:text-black rounded-[0.5rem] border-2 border-gray-600"
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
