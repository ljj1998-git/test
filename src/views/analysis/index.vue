<template>
  <KContent title="资料分析">
    <template #titleRight>
      <Buttons />
    </template>
    <template #content>
      <div class="w-full h-full flex">
        <div class="w-[300px] h-full pr-4">
          <QuestionTypeTree />
        </div>
        <n-divider vertical style="height: 100%" />
        <div class="flex-1 px-4">
          <UserReport />
        </div>
        <n-divider vertical style="height: 100%" />
        <div class="w-[300px] h-full px-4">
          <PracticeHistory />
        </div>
      </div>
    </template>
  </KContent>
</template>

<script setup lang="ts">
  import Buttons from './components/Buttons.vue';
  import PracticeHistory from './components/PracticeHistory.vue';
  import QuestionTypeTree from './components/QuestionTypeTree.vue';
  import UserReport from './components/UserReport.vue';
</script>

<style>
  .n-timeline {
    width: 100% !important;
  }
</style>
