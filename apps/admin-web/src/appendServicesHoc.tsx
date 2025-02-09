import React from 'react';
import { useAsync } from 'react-use';

import { ServicesContext } from './contexts';
import di from './services/di';

const appendServicesHoc = (servicesTokens: string[] = []) => (Component: any) => (props: any) => {
  const servicesRef = React.useRef<any>(null);

  React.useEffect(() => () => {
    if (servicesRef.current) {
      servicesRef.current = null;
    }
  }, []);

  const callback = async () => {
    if (!servicesRef.current) {
      servicesRef.current = await servicesTokens.reduce(async (accumP, name) => {
        const curr = await di.items[name];
        const accum = await accumP;
        return { ...accum, [name]: curr };
      }, Promise.resolve({}));
    }
    return Promise.resolve(servicesRef.current);
  };
  const { value } = useAsync(callback, []);

  if (value) {
    return (
      <ServicesContext.Provider value={value}>
        <Component
          {...props}
        />
      </ServicesContext.Provider>
    );
  } else {
    return null;
  }
};

export default appendServicesHoc;
