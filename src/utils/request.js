/*
 * @Author: zoujun
 * @Date: 2019-06-10 13:56:05
 * @Desc 封装ajax请求
 * @Last Modified by: zoujun
 * @Last Modified time: 2019-06-28 15:10:34
 */
import axios from "axios";
import { notification } from "ant-design-vue";

const codeMessage = {
  0: "Custom error",
  400: "The request was made with an error and the server did not perform any operations to create or modify data.",
  401: "User does not have permission (token, username, password is incorrect).",
  403: "The user is authorized, but access is forbidden.",
  404: "The request is made for a record that does not exist and the server does not operate.",
  406: "The format of the request is not available.",
  410: "The requested resource is permanently deleted and will not be retrieved.",
  422: "A validation error occurred when creating an object.",
  500: "An error occurred on the server. Please check the server.",
  502: "Gateway error.",
  503: "The service is unavailable and the server is temporarily overloaded or maintained.",
  504: "The gateway timed out."
};

const baseUrl = "/api";
axios.defaults.timeout = 6000; // 根据具体情况而定

/** 404 和 500 异常报错的处理方式  */
const specialHandler = (code, url) => {
  // 判断404和500状态码进入相应的页面 前提是不是在登录页面(可以根据请求地址判断 ----> 最粗暴的办法😂)
  switch (code) {
    case 500:
      console.log(url);
      break;
    case 505:
      console.log(url);
      break;
    default:
      // 🤭这里不可能走到的
      throw new Error("未处理类型，请放过前端");
  }
};

/** 异常处理 */
const errorHandler = error => {
  const { response = {} } = error;
  const errortext = codeMessage[response.status] || response.statusText;
  const {
    status,
    config: { url }
  } = response;

  notification.error({
    message: `Request error ${status}: ${url}`,
    description: errortext
  });

  if ([500, 505].includes(status)) {
    specialHandler(status, url);
  }
};

/** 自定义报错异常处理 */
const custErrorHandler = error => {
  const {
    data: { code, message },
    config: { url }
  } = error;

  notification.error({
    message: `Request error ${code}: ${url}`,
    description: message
  });

  if ([500, 505].includes(status)) {
    specialHandler(status, url);
  }
};

/** 配置请求默认参数 */
const defaultParams = {};

/** request 拦截器 */
axios.interceptors.request.use(
  config => {
    console.log(config);
    config.headers.access_token = localStorage.getItem("sso-token");
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

/** response 拦截器 */
axios.interceptors.response.use(
  res => {
    console.log(res);

    const statusKeys = Object.keys(codeMessage);
    try {
      if (res.headers.access_token) {
        res.data = res.data
          ? res.data
          : {
              code: 200,
              data: {
                token: JSON.stringify(res)
              }
            };
        localStorage.setItem("sso-token", res.headers.access_token);
        console.log(res.data);
      }
      const {
        data: { code }
      } = res.data;
      if (statusKeys.includes(code.toString())) {
        // 隐式报错
        custErrorHandler(res);
        return res;
      } else {
        return res;
      }
    } catch (e) {
      return res.data;
    }
  },
  err => {
    // 显式报错
    errorHandler(err);
    const { response = {} } = err;
    console.log(response);
    return {
      data: {
        code: response.status,
        data: null
      }
    };
  }
);

/** 封装请求暴露出去 */
export default {
  /** GET 请求 */
  get: async (url, params, defaultHeader = {}) => {
    const headerConfig = {
      ...defaultParams,
      ...defaultHeader
    };
    return new Promise(resolve => {
      axios.get(baseUrl + url, params, headerConfig).then(res => {
        const { data } = res;
        resolve(data);
      });
    });
  },
  /** POST 请求 */
  post: async (url, params, defaultHeader = {}) => {
    const headerConfig = {
      ...defaultParams,
      ...defaultHeader
    };
    return new Promise(resolve => {
      axios.post(baseUrl + url, params, headerConfig).then(res => {
        console.log(res);
        resolve(res);
      });
    });
  },
  /** 文件流 上传 */
  blobStream: async (url, params, defaultHeader) => {
    const headerConfig = {
      ...defaultParams,
      ...defaultHeader,
      responseType: "arraybuffer"
    };
    return new Promise(() => {
      axios.post(baseUrl + url, params, headerConfig).then(res => {
        const { data } = res;
        const aLink = document.createElement("a");
        const blob = new Blob([data], "application/vnd.ms-excel");
        aLink.href = URL.createObjectURL(blob);
        document.body.appendChild(aLink);
        aLink.click();
        document.body.removeChild(aLink);
      });
    });
  }
};
