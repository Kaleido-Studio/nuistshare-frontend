<script setup>
defineProps({
    name:String,
    target: String,
    L1: String,
    L2: String,
})
</script>

<template>
    <TCard shadow>
        {{ name }}
    </TCard>
</template>
