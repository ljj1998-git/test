<template>
  <n-space>
    <n-button type="primary">
      <template #icon>
        <AddOutline />
      </template>
      刷题
    </n-button>
    <n-button type="primary">
      <template #icon>
        <AddOutline />
      </template>
      学习
    </n-button>
    <n-button type="primary">
      <template #icon>
        <AddOutline />
      </template>
      笔记
    </n-button>
    <n-button type="primary">
      <template #icon>
        <AddOutline />
      </template>
      讨论区
    </n-button>
    <n-button type="primary">
      <template #icon>
        <AddOutline />
      </template>
      讨论区
    </n-button>
  </n-space>
</template>

<script setup lang="ts">
  import { AddOutline } from '@vicons/ionicons5';
  defineEmits(['click']);
</script>
