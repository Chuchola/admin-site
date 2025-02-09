import { createContainer, Container } from 'iti';

import store from '../store';

const di: Container<any, any> =  createContainer()
  .add({
    store: () => store,
  })
  .add((ctx: any) => ({
    homePageService: async () => {
      const module = await import(/* webpackChunkName: "HomePageService" */ '../pages/HomePage/HomePage.service');
      return new module.HomePageService(ctx.store);
    },
  }))
  .add((ctx: any) => ({
    authService: async () => {
      const module = await import(/* webpackChunkName: "AuthService" */ './Auth/Auth.service');
      return new module.AuthService(ctx.store);
    },
  }))
;

export default di;
