<script setup lang="ts">
defineProps<{ title: string; buttonRed?: boolean; description: string }>()
defineEmits(['click'])
</script>

<template>
  <TCard class="my-3!">
    <h2>{{ title }}</h2>
    <p class="text-base">
      {{ description }}
    </p>
    <div>
      <slot />
    </div>
    <template #footer>
      <div class="w-full flex justify-end flex-row">
        <TButton shape="round" size="" :theme="buttonRed ? 'danger' : 'primary'" @click="$emit('click')">
          修改
        </TButton>
      </div>
    </template>
  </TCard>
</template>
