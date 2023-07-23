import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import { SkillSelection } from './pages/SkillSelection';
import { GdprInfo } from './pages/GdprInfo';
import { RankSkills } from './pages/RankSkills';
import { SoftSkillSelection } from './pages/SoftSkillSelection';
import { Summary } from './pages/Summary';
import SfiaInfoView from './components/SfiaInfoView';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import InfoIndex from './components/InfoIndex';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Home } from './pages/Home';
import { FinalPage } from './pages/FinalPage';
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        {
          path: '/skills',
          element: <SkillSelection />,
          errorElement: <ErrorPage />,
          children: [
            { index: true, element: <InfoIndex /> },
            {
              path: '/skills/:sfiaId',
              element: <SfiaInfoView />,
              errorElement: <ErrorPage />,
            },
          ],
        },
        {
          path: '/rank-sfia',
          element: <RankSkills />,
          errorElement: <ErrorPage />,
        },
        {
          path: '/soft-skills',
          element: <SoftSkillSelection />,
          errorElement: <ErrorPage />,
        },
        {
          path: '/summary',
          element: <Summary />,
          errorElement: <ErrorPage />,
        },
        {
          path: '/gdprinfo',
          element: <GdprInfo />,
          errorElement: <ErrorPage />,
        },
      ],
    },
    {
      path: '/thankyou',
      element: <FinalPage />,
      errorElement: <ErrorPage />,
    },
  ],
  {
    basename: '/',
  },
);
const colors = {
  jamk: {
    magentaJAMK: '#e2066f',
    blueJAMK: '#0d004c',
    turquoiseJAMK: '#00b49d',
    yellowJAMK: '#fdb913',
  },
};

const theme = extendTheme({ colors });
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
