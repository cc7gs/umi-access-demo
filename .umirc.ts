import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/test',
      name: 'access测试',
      wrappers: ['@/wrappers/checkType'],
      // component:'@/wrappers/checkType',
      routes: [
        {
          path: 'typeOne',
          name: 'typeOne',
          access: 'isTypeOne',
          component: './Table',
        },
        {
          path: 'typeTwo',
          name: 'typeTwo',
          access: 'isTypeTwo',
          component: './Home',
        },
      ],
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
  ],
  npmClient: 'pnpm',
});
