<template>
  <h3 class="mt-0">练习历史</h3>
  <n-scrollbar style="height: calc(100% - 50px);">
    <n-list hoverable bordered>
      <n-list-item v-for="item in 10">
        <n-thing title="资料分析练习1" content-style="margin-top: 10px;">
          <template #header-extra>
            <n-tag :bordered="false" type="primary" size="small">2024/05/12</n-tag>
          </template>
          <template #description>
            <n-space size="small" style="margin-top: 4px">
              <n-button text type="primary">查看历史</n-button>
              <n-button text type="primary">重新练习</n-button>
              <n-button text type="primary">错题重做</n-button>
            </n-space>
          </template>
        </n-thing>
      </n-list-item>
    </n-list>
  </n-scrollbar>
</template>

<script setup lang="ts"></script>
