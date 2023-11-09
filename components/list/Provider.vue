<script setup lang="ts">
const archives = useArchives()

const { currentPage } = archives.getPagination()
const { archiveList, tree } = await archives.flushAll()

watch(currentPage, () => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <section id="start" class="">
    <div
      class="py-4 min-w-2/3 sm:max-w-[980px] mx-auto flex-row items-center justify-around p-3  flex"
    >
      <ListFilterMobile :tree="tree!" />
    </div>
    <div
      class="flex flex-row justify-center items-begin gap-10 w-full"
    >
      <div class="xl:block hidden sticky ">
        <ListFilterPC :tree="tree!" />
      </div>
      <!-- this is divider -->
      <div
        class="border-gray-300 border-solid border-l-0 border-r-1 my-10 xl:block hidden"
      />
      <!-- end divider -->
      <div
        class="flex flex-col gap-5 min-w-2/3 sm:max-w-2/3 bg-[white] sm:p-8 p-2 rounded-xl"
      >
        <ListEntryGrid :archive-list="archiveList!" />
      </div>
    </div>
  </section>
</template>
