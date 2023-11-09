<template>
  <section
    class="w-full h-screen text-center col-span-4 bg-cover bg-no-repeat"
    style="
      background: linear-gradient(
          to top,
          #ffffffd3 0%,
          rgba(255, 255, 255, 0.4) 100%
        ),
        url('https://nuistshare-cdn.dustella.net/fonts//back.png');
      background-size: cover, cover;
      background-position: right,right;
    "
  >
    <div class="flex-col flex items-center justify-center h-full">
      <div class="sm:px-20 px-10 shadow drop-shadow-xl bg-white/90 rounded-xl mx-auto ">
        <div class="flex  flex-row items-center justify-center py-10">
          <div>
            <div class=" text-center">
              <h1 class="sm:text-3xl">
                注册
              </h1>
            </div>
            <div class="flex items-center  flex-col">
              <FormRegister />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
