import {GlobalOverlayProvider} from '@hooks/use-global-overlay';
import {ThemeProvider} from '@hooks/use-theme';
import store from '@redux/store';
import Routes from '@routes/routes';
import {DEFAULT_LIGHT_THEME} from '@themes';
import React from 'react';
import {ToastProvider} from 'react-native-toast-notifications';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <ToastProvider>
      <Provider store={store.store}>
        <PersistGate loading={null} persistor={store.persistor}>
          <ThemeProvider initial={DEFAULT_LIGHT_THEME}>
            <GlobalOverlayProvider>
              <Routes />
            </GlobalOverlayProvider>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </ToastProvider>
  );
};

export default App;
