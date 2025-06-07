<template>
  <h3 class="mt-0">错题统计</h3>
  <n-timeline style="width: 100%">
    <n-timeline-item type="success">
      <div class="flex">
        <div class="w-[120px]">
          <n-gradient-text type="success">正确率≥80%</n-gradient-text>
        </div>
        <n-space>
          <n-popconfirm :positive-text="null" :negative-text="null" v-for="item in 20">
            <template #icon>
              <n-icon>
                <RibbonOutline />
              </n-icon>
            </template>
            <template #trigger>
              <n-tag size="small" class="cursor-pointer" :bordered="false" type="success">
                不该
              </n-tag>
            </template>
            <template #action>
              <n-space>
                <n-button type="primary" size="small">刷5道错题</n-button>
                <n-button type="primary" size="small">刷5道真题</n-button>
              </n-space>
            </template>
            坚持就是胜利✌🏻
          </n-popconfirm>
        </n-space>
      </div>
    </n-timeline-item>

    <n-timeline-item type="warning">
      <n-space>
        <n-gradient-text type="warning">正确率≥60%</n-gradient-text>
        <n-tag :bordered="false" size="small" type="warning" v-for="item in 10">不该</n-tag>
      </n-space>
    </n-timeline-item>
    <n-timeline-item type="error">
      <n-space>
        <n-gradient-text type="error">正确率≥40%</n-gradient-text>
        <n-tag :bordered="false" size="small" type="error" v-for="item in 10">不该</n-tag>
      </n-space>
    </n-timeline-item>
    <n-timeline-item type="info">
      <n-gradient-text type="info">正确率≥20%</n-gradient-text>
    </n-timeline-item>
    <n-timeline-item type="warning">
      <n-gradient-text type="warning">正确率≥0%</n-gradient-text>
    </n-timeline-item>
  </n-timeline>
  <n-row>
    <n-col :span="12">
      <h3>我的错题</h3>
    </n-col>
    <n-col :span="12">
      <h3>我的收藏</h3>
    </n-col>
  </n-row>
</template>

<script setup lang="ts">
  import { RibbonOutline } from '@vicons/ionicons5';
</script>
