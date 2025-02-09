import routeConfiguration from '../routing/routeConfiguration';

export const routePathByName = (name: string): string => {
  const routes = routeConfiguration();
  const route = routes.find(i => i.name === name);
  return route ? route.path : '/';
}
