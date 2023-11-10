import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { QueryClientProvider, QueryClient} from '@tanstack/react-query'
import { CountryContextProvider } from './context';


import './assets/style/style.scss';
import { RouterProvider } from 'react-router-dom';


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <CountryContextProvider>

      {/* <App /> */}
      <RouterProvider router={App}/>
    </CountryContextProvider>
  </QueryClientProvider>,
)
