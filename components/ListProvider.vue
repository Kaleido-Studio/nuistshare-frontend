<script setup>
import { SearchIcon } from "tdesign-icons-vue-next";
const { data: res } = await useAsyncData("res", () => queryContent("/").find());
const { treeList, fin } = transformData(res.value);
const isSmallScreen = useMediaQuery("(max-width: 640px)");

const currentPage = ref(1);
const searchKeyword = ref("");
const l2_filter = ref([]);
const keys = ref([]);
const visible = ref(false);

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

const handleClose = (e) => {
  if (e === "search") {
    searchKeyword.value = "";
    return;
  }
  l2_filter.value = l2_filter.value.filter((a) => a !== e);
  currentPage.value = 1;
};
watch(
  () => searchKeyword.value,
  () => {
    currentPage.value = 1;
  }
);
</script>

<template>
  <section class="" id="start">
    <div
      class="flex flex-row justify-center items-begin gap-10 w-full sm:p-10 p-3"
    >
      <div class="sm:block hidden">
        <div class="h-auto bg-white p-8 rounded-xl">
          <TSpace class="py-4 flex flex-row items-center">
            <SearchIcon />
            <TInput v-model="searchKeyword" />
          </TSpace>

          <TTree
            checkable
            size="large"
            :data="treeList"
            v-model="l2_filter"
            value-mode="onlyLeaf"
            value-type="string"
          />
        </div>
      </div>
      <div
        class="flex flex-col gap-5 min-w-2/3 sm:max-w-2/3 bg-[#eee] sm:p-8 p-2 rounded-xl"
      >
        <TSpace
          class="py-4 flex flex-row items-center justify-around p-3 lg:block hidden"
        >
          <SearchIcon />
          <TInput v-model="searchKeyword" />
          <ClientOnly>

              <TButton @click="visible = true">筛选</TButton>
              <TDrawer placement="bottom" v-model:visible="visible" size="78%">
                <TTree
                checkable
                size="large"
                :data="treeList"
                v-model="l2_filter"
                value-mode="onlyLeaf"
                value-type="string"
                />
            </TDrawer>
        </ClientOnly>
        </TSpace>

        <TSpace
          break-line
          v-if="searchKeyword !== '' || l2_filter.length !== 0"
        >
          <TTag
            theme="primary"
            variant="outline"
            size="large"
            closable
            v-if="searchKeyword"
            @close="handleClose('search')"
          >
            搜索：{{ searchKeyword }}
          </TTag>
          <TTag
            v-for="i in l2_filter"
            theme="primary"
            variant="outline"
            size="large"
            :key="i"
            closable
            @close="handleClose(i)"
          >
            {{ i }}
          </TTag>
        </TSpace>
        <p>总共: {{ fin.length }}, 筛选后 {{ fullListToRender.length }}</p>
        <SingleEntry
          v-for="i in currentList"
          :name="i.title"
          :L1="i.l1_title"
          :L2="i.l2_title"
          :target="i.target"
        />
        <TPagination
          :total="total"
          v-model="currentPage"
          :show-page-size="false"
          :theme="isSmallScreen ? 'simple' : 'default'"
        />
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
