﻿export default [
  {
    name: 'login',
    path: '/login',
    layout: false,
    component: './Login',
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'isAdmin',
    routes: [
      {
        path: '/admin',
        redirect: '/admin/sub-1',
      },
      {
        path: '/admin/sub-1',
        name: 'sub-1',
        component: './Admin/Sub1',
      },
      {
        path: '/admin/sub-1/sub-11',
        name: 'sub-1-1',
        component: './Admin/Sub1/Sub11',
        hideInMenu: true,
      },
      {
        path: '/admin/sub-2',
        name: 'sub-2',
        component: './Admin/Sub2',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    path: '*',
    layout: false,
    component: './404',
  },
];
