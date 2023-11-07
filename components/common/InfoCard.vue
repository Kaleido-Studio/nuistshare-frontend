<script setup lang="ts">
import { IconFont } from 'tdesign-icons-vue-next'

defineProps<{ title: string; buttonRed?: boolean; description: string;icon: string; noButton?: boolean; buttonText?: string }>()
defineEmits(['submit'])
</script>

<template>
  <div class="flex sm:flex-row flex-col justify-around py-3">
    <div class=" text-xl p-2 py-3">
      <IconFont :name="icon" />
      {{ title }}
    </div>
    <div class=" bg-white rounded-xl drop-shadow  overflow-hidden sm:min-w-2/3">
      <div class="sm:px-5 px-4 py-3">
        <h3>{{ title }}</h3>
        <p class="text-[0.9rem]">
          {{ description }}
        </p>
        <div>
          <slot />
        </div>
      </div>
      <div v-if="!noButton" class="w-auto flex justify-end flex-row bg-[#f5f5f5] p-4">
        <TButton size="medium" :theme="buttonRed ? 'danger' : 'primary'" @click="$emit('submit')">
          {{ buttonText ?? "修改" }}
        </TButton>
      </div>
    </div>
  </div>
</template>
