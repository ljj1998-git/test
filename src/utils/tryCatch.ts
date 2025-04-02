// 校验请求
export const tryCatch = async (
  fn: Function,
  params?: any,
  defaultValue?: any
) => {
  let result = defaultValue ?? null;
  try {
    result = await fn(params);
  } catch (error) {
    console.error(error);
  }
  return result;
};
