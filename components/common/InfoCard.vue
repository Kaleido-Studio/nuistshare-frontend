<script setup lang="ts">
defineProps<{ title: string; buttonRed?: boolean; description: string;icon: string; noButton?: boolean; buttonText?: string }>()
defineEmits(['submit'])
</script>

<template>
  <div class="flex sm:flex-row flex-col justify-around py-3">
    <!-- <div class=" text-xl p-2 py-3">
      <IconFont :name="icon" />
      {{ title }}
    </div> -->
    <div class=" bg-white rounded-xl border-(solid 1 gray-200)  overflow-hidden sm:min-w-2/3">
      <div class="lg:px-6 px-5 py-3 flex flex-row justify-between items-center">
        <div>
          <h3>{{ title }}</h3>
          <p class="text-[0.9rem]">
            {{ description }}
          </p>
          <div class="pb-3">
            <slot />
          </div>
        </div>
        <div>
          <slot name="avatar" />
        </div>
      </div>
      <div v-if="!noButton" class="w-auto flex lg:justify-end justify-center flex-row bg-[#fafafa] py-4 px-8  border-(gray-300 solid 0 t-1)">
        <TButton size="medium" :theme="buttonRed ? 'danger' : 'primary'" @click="$emit('submit')">
          {{ buttonText ?? "修改" }}
        </TButton>
      </div>
    </div>
  </div>
</template>
