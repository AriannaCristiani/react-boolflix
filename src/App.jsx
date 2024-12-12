import { BrowserRouter } from 'react-router-dom';
import DefaultLayout from './Layout/DefaultLayout';
import { GlobalProvider } from './Context/GlobalContext';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <DefaultLayout />
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;