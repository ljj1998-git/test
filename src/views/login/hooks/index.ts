import { loginApi, getCaptchaApi } from "@/apis/login";
import { encryptByAes } from "@/utils/encrypt";
import { tryCatch } from "@/utils/tryCatch";
import { ILoginForm } from "../types";
import _ from "lodash";

export const useLogin = async (datas: ILoginForm) => {
  const params = _.cloneDeep(datas);
  params.password = encryptByAes(params.password);
  return await tryCatch(loginApi, params);
};

export const useGetCaptcha = async () => {
  let captchaUrl = "";
  captchaUrl = await tryCatch(getCaptchaApi);
  console.log(captchaUrl);

  return { captchaUrl };
};
