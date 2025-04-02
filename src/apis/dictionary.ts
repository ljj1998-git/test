import http from '@/utils/request';

export const getDictionaryListApi = () => {
  return http.post('/dictionary/search');
};

export const getDictionaryParentApi = () => {
  return http.get('/dictionary/searchParent');
};

export const createDictionaryApi = data => {
  return http.post('/dictionary/create', data);
};
