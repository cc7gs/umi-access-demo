export default (initialState: API.UserInfo) => {
  // 在这里按照初始化数据定义项目中的权限，统一管理
  // 参考文档 https://next.umijs.org/docs/max/access
  const canSeeAdmin = !!(
    initialState && initialState.name !== 'dontHaveAccess'
  );

  // 可以在这里切换 access的值；如果都为false时，wrappers不会被执行（即log不会被打印）
  const isTypeOne = false;
  const isTypeTwo = false;
  const isNotType = !isTypeOne && !isTypeTwo;

  return {
    canSeeAdmin,
    isTypeOne,
    isTypeTwo,
    isNotType,
  };
};
