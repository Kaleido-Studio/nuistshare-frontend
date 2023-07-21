<script setup>
const ls = [
    "1",
    "2",
    "3"
]
</script>


<template>
    <br />
<section class="mt-30">
    <div>
        <SingleEntry 
            v-for="i in ls"
            :name="i" />
    </div>
</section>
</template>
