<script setup>
import { SearchIcon } from "tdesign-icons-vue-next";
const { data: res } = await useAsyncData("res", () => queryContent("/").find());
const { treeList, fin } = transformData(res.value);

const currentPage = ref(1);
const searchKeyword = ref("");
const l2_filter = ref([]);
const keys = ref({});

const fullListToRender = computed(() => {
  const key = searchKeyword.value;
  return fin
    .filter(
      (a) =>
        searchKeyword === "" ||
        a.title.includes(key) ||
        a.l1_title.includes(key) ||
        a.l2_title.includes(key)
    )
    .filter(
      (a) =>
        l2_filter.value.length === 0 || l2_filter.value.includes(a.l2_title)
    );
});

const total = computed(() => fullListToRender.value.length);

const currentList = computed(() => {
  const start = (currentPage.value - 1) * 10;
  const end = currentPage.value * 10;
  return fullListToRender.value.slice(start, end);
});

const handleChange = (e) => {
  l2_filter.value = e;
};
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
            <TInput v-model="searchKeyword" />
          </TSpace>

          <TTree
            checkable
            size="large"
            :data="treeList"
            :keys="keys"
            value-mode="onlyLeaf"
            value-type="string"
            @change="handleChange"
          />
        </div>
      </div>
      <div class="flex flex-col gap-5 min-w-2/3 bg-[#eee] p-8 rounded-xl">
        {{ l2_filter }}
        <p>总共: {{ fin.length }}, 筛选后 {{ fullListToRender.length }}</p>
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
