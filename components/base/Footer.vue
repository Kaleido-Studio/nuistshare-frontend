<script setup>
const isSmallScreen = useMediaQuery('(max-width: 640px)')
</script>

<template>
  <ClientOnly>
    <footer class="bg-[#f0f0f0] py-10">
      <div class="flex lg:flex-col flex-row px-10 text-center" />
      <TDivider />
      <div class="flex sm:flex-row flex-col justify-between max-w-[980px] mx-auto  ">
        <div class="flex flex-row sm:text-base text-sm">
          <div
            class="w-1/2 sm:flex flex-col  sm:justify-center sm:w-auto [&>*]:px-3"
          >
            <h3 class="sm:text-base text-sm font-bold">
              一些组织
            </h3>
            <a href="https://www.duohuo.org.cn/" target="_blank" class="my-2 text-gray-600 decoration-none block">DH互联网工作室</a>
            <a href="https://qm.qq.com/q/j33e43giyc" target="_blank" class="my-1 text-gray-600 decoration-none block">海上修机师</a>
          </div>
          <div
            class="w-1/2 sm:flex flex-col  sm:justify-center sm:w-auto [&>*]:px-3"
          >
            <h3 class="sm:text-base text-sm font-bold">
              友情链接
            </h3>
            <a href="http://www.dustella.net" target="_blank" class="my-2 text-gray-600 decoration-none block">Dustella</a>
            <a href="https://nav.agentwei.cn/" target="_blank" class="my-1 text-gray-600 decoration-none block">Infinity 导航</a>
          </div>
        </div>
        <TDivider v-if="isSmallScreen" />
        <div
          class="overlay no-underline! tracking-[0.1rem] text-center title-font text-black decoration-none sm:text-3xl text-2xl"
        >
          Nuistshare
        </div>
      </div>
    </footer>
  </ClientOnly>
</template>
