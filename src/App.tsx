import React from 'react';

interface Props {
  name?: string;
}
const App: React.FunctionComponent<Props> = ({ name }) => {
  return <div></div>;
};
App.defaultProps = {
  name: 'Grid',
};
export { App };
