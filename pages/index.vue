<script setup lang="ts">
const login = useLogin()
</script>

<template>
  <div>
    <BaseHero />
    <DevOnly>
      <div class="w-[200px] overflow-hidden">
        <code class=" overflow-hidden max-w-20!">
          {{ login.isLoggedIn }}
        </code>
        <button @click="() => login.isLoggedIn = !login.isLoggedIn">
          toggle
        </button>
      </div>
    </DevOnly>
  </div>
</template>
