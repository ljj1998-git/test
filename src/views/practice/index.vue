<template>
  <KContent title="开始练习">
    <template #titleRight>
      <n-space align="center">
        <n-countdown :render="renderCountdown" :duration="996 * 1000" :active="true" />
        <n-button>计算器</n-button>
        <n-button type="primary">提交答案</n-button>
      </n-space>
    </template>
    <template #content>
      <n-split direction="horizontal"  :max="0.75" :min="0.25">
        <template #1>Pane 1</template>
        <template #2>Pane 2</template>
      </n-split>
    </template>
  </KContent>
</template>

<script lang="ts" setup>
  import { CountdownProps } from 'naive-ui';

  const renderCountdown: CountdownProps['render'] = ({ hours, minutes, seconds }) => {
    return `练习结束还有：${String(hours).padStart(2, '0')}${String(minutes).padStart(
      2,
      '0'
    )}:${String(seconds).padStart(2, '0')}`;
  };
</script>
