<script setup lang="ts">
const form = reactive({
  name: '',
  l1Class: '',
  l2Class: '',
})
</script>

<template>
  <div>
    <h1>上传资料</h1>
    <TForm>
      <TFormItem label="标题">
        <TInput v-model="form.name" />
      </TFormItem>
      <TFormItem label="专业分类">
        《》
        <TInput v-model="form.name" />
      </TFormItem>
      <TFormItem label="科目分类">
        《》
        <TInput v-model="form.name" />
      </TFormItem>
    </TForm>
  </div>
</template>
