const Mock = require("mockjs");
// const domain = "http://mockjs.com/api";
// 返回成功的状态码
const code = 200;

// 登录账号密码固定死
const UserList = [
  {
    name: "admin",
    password: "123456"
  },
  {
    name: "duya",
    password: "123456"
  },
  {
    name: "zoujun",
    password: "123456"
  }
];

// 取得body里面的内容
const subParam = params => {
  const { body } = params;
  return JSON.parse(body);
};

const postLogin = req => {
  const JsonParams = subParam(req);
  let result = {};

  for (let c = 0; c < UserList.length; c++) {
    if (
      JsonParams.user === UserList[c].name &&
      JsonParams.password === UserList[c].password
    ) {
      result = Mock.mock({
        data: {
          code,
          "token|11111111112322132131": 11111111112322132131
        },
        message: "请求成功"
      });
      break;
    } else {
      result = {
        data: {
          code: 500
        },
        message: "请求失败"
      };
    }
  }
  return {
    ...result
  };
};

Mock.mock(RegExp("/user/login"), "post", options => {
  return postLogin(options);
});
