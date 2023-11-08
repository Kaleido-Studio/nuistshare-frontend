<script setup lang="ts">
const user = useUser()
const login = useLogin()
</script>

<template>
  <div>
    <BaseHero />
    <DevOnly>
      <div class="w-[200px] overflow-hidden">
        <code class=" overflow-hidden max-w-20!">
          {{ user.IsLoggedIn }}
          {{ login.isLoggedIn }}
        </code>
        <button @click="() => login.isLoggedIn = !login.isLoggedIn">
          toggle
        </button>
      </div>
    </DevOnly>
  </div>
</template>
