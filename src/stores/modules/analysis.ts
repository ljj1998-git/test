import { defineStore } from 'pinia';

export const useAnalysisStore = defineStore('analysis', {
  state: (): IState => ({}),
  getters: {},
  actions: {},
});

interface IState {}
