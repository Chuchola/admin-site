import loadable from '@loadable/component';

import { RouteParams } from './RouteParams';

const HomePage = loadable(() => import(/* webpackChunkName: "HomePage" */ '../pages/HomePage/HomePage'));
const SignUpPage = loadable(() => import(/* webpackChunkName: "SignUpPage" */ '../pages/SignUpPage/SignUpPage'));
const NotFoundPage = loadable(() => import(/* webpackChunkName: "NotFoundPage" */ '../pages/NotFoundPage/NotFoundPage'));

const routeConfiguration = (): RouteParams[] => {
  return [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/signup',
      name: 'SignUpPage',
      component: SignUpPage,
    },
    {
      path: '/not-found',
      name: 'NotFoundPage',
      component: NotFoundPage,
    },
  ];
};

export default routeConfiguration;
