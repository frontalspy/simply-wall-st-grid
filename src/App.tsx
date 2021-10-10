import React from 'react';
import { Navigation } from './navigation/navigation';
import { Stocks } from './stocks/stocks';

interface Props {
  name?: string;
}
const App: React.FunctionComponent<Props> = ({ name }) => {
  return (
    <div className="app">
      <header>
        <Navigation />
      </header>
      <main>
        <h1>Stocks</h1>
        <Stocks />
      </main>
    </div>
  );
};
App.defaultProps = {
  name: 'Grid',
};
export { App };
