import React from 'react';
import { useSelector } from 'react-redux';

import appendServicesHoc from '../../appendServicesHoc';
import { ServicesContext } from '../../contexts';
import type { HomePageService } from './HomePage.service';

import TopBar from '../../containers/TopBar/TopBar';
import Page from '../../components/Page/Page';
import PageContent from '../../components/PageContent/PageContent';

interface Props {
}

interface Services {
  homePageService: HomePageService;
}

const HomePage = (_props: Props): React.ReactElement => {
  const {
    homePageService,
  } = React.useContext<Services>(ServicesContext);

  const count = useSelector(() => homePageService.$count());

  const handleIncrement = React.useCallback(() => {
    homePageService.increment();
  }, [homePageService]);

  const handleDecrement = React.useCallback(() => {
    homePageService.decrement();
  }, [homePageService]);

  return (
    <Page>
      <TopBar />
      <PageContent>
        <div>Home Page</div>
        <div>One</div>
        <button onClick={handleIncrement}>Increment</button>
        {count}
        <button onClick={handleDecrement}>Decrement</button>
      </PageContent>
    </Page>
  );
};

export default appendServicesHoc([
  'homePageService',
])(HomePage);
