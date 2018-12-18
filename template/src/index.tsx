import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import registerServiceWorker from './registerServiceWorker';
import { store } from './store';
import { history, getRoutes} from "./routes";
import './reset.less';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {getRoutes(store)}
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
