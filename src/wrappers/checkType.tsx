import { Navigate, Outlet, useAccess } from '@umijs/max';

export default () => {
  const access = useAccess();

  // 用于测试该文件是否被执行
  console.log(access, 'access');

  if (access.isNotType) {
    return <Navigate to="/access" replace />;
  }
  return <Outlet />;
};
