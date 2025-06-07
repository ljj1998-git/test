<template>
  <h3 class="mt-0">题型分类</h3>
  <n-space>
    <n-tag v-model:checked="checked" type="info" checkable>题型分类</n-tag>
    <n-tag v-model:checked="checked" type="info" checkable>模块分类</n-tag>
  </n-space>
  <n-tree
    show-line
    style="width: 100%"
    :selectable="false"
    :checkable="false"
    block-line
    :data="data"
    :render-label="renderLabel"
    :renderSuffix="renderSuffix"
  />
</template>

<script setup lang="ts">
  import router from '@/router';
  import { TreeOption } from 'naive-ui';

  const data = [
    {
      label: '基础计算',
      key: 1,
      children: [{ label: '加法', key: 4, children: [{ label: '加法', key: 7 }] }],
    },
    { label: '基期计算', key: 2, children: [{ label: '一般基期', key: 5 }] },
    { label: '现期计算', key: 3, children: [{ label: '456', key: 6 }] },
  ];
  const checked = ref(false);
  function renderLabel({ option }: { option: TreeOption }) {
    return h(
      NSpace,
      { align: 'center' },
      {
        default: () => [
          h(NButton, { text: true, type: 'primary' }, { default: () => `${option.label}` }),
          h('span', { class: 'text-gray-400' }, `120/202`),
        ],
      }
    );
  }

  const renderSuffix = () => {
    return h(
      NButton,
      {
        text: true,
        type: 'primary',
        onClick: () => {
          router.push('/practice');
        },
      },
      `开始练习`
    );
  };
</script>
