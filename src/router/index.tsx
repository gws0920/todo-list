import { createBrowserRouter, RouteObject } from 'react-router-dom';

import DefaultLayout from '@/layout/Default';
import About from '@/views/About';
import TodoList from '@/views/TodoList';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <TodoList />,
      },
      {
        path: 'About',
        element: <About />,
      },
    ],
  },
];

export default createBrowserRouter(routes);
