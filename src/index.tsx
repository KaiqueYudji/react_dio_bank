
import ReactDOM from 'react-dom/client';
import Rota from './routes';
import { AppContextProvider } from './components/global/AppContext';
import { create_local_storage, get_all_local_storage } from './services/storage';

!get_all_local_storage() && create_local_storage();

let storage = localStorage;console.log(storage)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  
    <AppContextProvider>
       <Rota />
    </AppContextProvider>
  
);

