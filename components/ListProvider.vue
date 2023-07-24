<script setup>
import { SearchIcon } from "tdesign-icons-vue-next";
const { data: res } = await useAsyncData("res", () => queryContent("/").find());
const fin = [];
const initMapping = {};
res.value.forEach((item) => {
  const { _file } = item;
  const [l1_title, l2_title] = _file
    .split("/")
    .map((a) => a.replace(".json", ""));

  if (initMapping[l1_title]) {
    initMapping[l1_title].push(l2_title);
  } else {
    initMapping[l1_title] = [l2_title];
  }

  item.body.forEach((list_item) => {
    const { title, target } = list_item;
    fin.push({
      title,
      target,
      l1_title,
      l2_title,
    });
  });
});

const treeList = [];
for (const l1_title in initMapping) {
  const children = initMapping[l1_title].map((l2_title) => ({
    value: l2_title,
    label: l2_title,
  }));
  treeList.push({
    value: l1_title,
    label: l1_title,
    children,
  });
}

const currentPage = ref(1);

const fullListToRender = computed(() => {
  const a = true;
  return fin.filter(() => true);
});

const total = computed(() => fullListToRender.value.length);

const currentList = computed(() => {
  const start = (currentPage.value - 1) * 10;
  const end = currentPage.value * 10;
  return fullListToRender.value.slice(start, end);
});
</script>

<template>
  <br />
  <!-- {{ res[0] }} -->
  <section class="mt-30">
    <div class="flex flex-row justify-center items-begin gap-10 w-full p-10">
      <div>
        <div class="h-auto bg-white p-8 rounded-xl">
          <TSpace class="py-4 flex flex-row items-center">
            <SearchIcon />
            <TInput />
          </TSpace>

          <TTree checkable size="large" :data="treeList" />
        </div>
      </div>
      <div class="flex flex-col gap-5 min-w-2/3 bg-[#eee] p-8 rounded-xl">
        <SingleEntry
          v-for="i in currentList"
          :name="i.title"
          :L1="i.l1_title"
          :L2="i.l2_title"
        />
        <TPagination :total="total" v-model="currentPage" />
      </div>
    </div>
  </section>
</template>

<style scoped>
:deep(.t-checkbox__label) {
  font-size: 16px;
  line-height: 24px;
}
</style>
