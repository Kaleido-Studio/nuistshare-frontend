<script setup>
import "tdesign-vue-next/es/style/index.css";
import "./styles/theme.css";
</script>

<template>
  <NsHeader />
  <NuxtPage />
  <NsFooter />
</template>

<style>
html,
body {
  margin: 0 !important;
  padding: 0 !important;
}

html {
  font-family: "Source Han Serif CN VF";
  background-color: #f5f5f5;
  scroll-behavior: smooth;
}

:target {
  scroll-margin-top: 4rem;
}

a {
  color: unset;
}

.title-font {
  font-family: "YouSheBiaoTiHei";
  font-weight: 500 !important;
}
</style>
