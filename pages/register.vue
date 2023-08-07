<template>
  <div class="flex h-screen flex-row items-center justify-center">
    <div class="w-[500px]">
      <LoginHero />
    </div>
    <div>
      <TCard shadow class="p-20">
        <div class="mt-30 text-center">
          <h1>注册</h1>
        </div>
        <div class="flex items-center pb-30 flex-col">
          <LoginForm />
        </div>
      </TCard>
    </div>
  </div>
</template>
