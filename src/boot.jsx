import * as React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';

import './polyfills';

import { fetchUser } from './actions/user.actions';

import configureStore from './configureStore';
import configureRoutes from './routes';

const store = configureStore();
const Routes = configureRoutes(store);

injectTapEventPlugin();

// TODO: request data only on page opening
store.dispatch(fetchUser());

document.addEventListener('DOMContentLoaded', () => render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('main')
));
