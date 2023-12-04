import { QueryClientProvider } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

// project import
import Routes from 'routes';
import ThemeCustomization from 'themes';

import Snackbar from 'components/@extended/Snackbar';
import Loader from 'components/Loader';
import Locales from 'components/Locales';
// import RTLLayout from 'components/RTLLayout';
import ScrollTop from 'components/ScrollTop';
import Notistack from 'components/third-party/Notistack';

import { dispatch } from 'store';
import { fetchMenu } from 'store/reducers/menu';

// auth provider
import { queryClient } from 'configs';
import { JWTProvider as AuthProvider } from 'contexts/JWTContext';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch dashboard menu from API
    dispatch(fetchMenu()).then(() => {
      setLoading(false);
    });
  }, []);

  if (loading) return <Loader />;

  return (
    <ThemeCustomization>
      {/* <RTLLayout> */}
      <Locales>
        <ScrollTop>
          <QueryClientProvider client={queryClient}>
            <AuthProvider>
              <>
                <Notistack>
                  <Routes />
                  <Snackbar />
                </Notistack>
              </>
            </AuthProvider>
          </QueryClientProvider>
        </ScrollTop>
      </Locales>
      {/* </RTLLayout> */}
    </ThemeCustomization>
  );
};

export default App;
