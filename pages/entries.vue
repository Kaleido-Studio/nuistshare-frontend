<template>
  <div class="container mx-auto mt-[10rem]">
    <h1 class="title-font text-center text-5xl py-5 ">
      电子书和试卷
    </h1>
    <Suspense>
      <ListProvider />
      <template #fallback>
        <div class="flex justify-center items-center">
          loading
        </div>
      </template>
    </Suspense>
  </div>
</template>
