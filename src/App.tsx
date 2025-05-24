import { Provider } from 'react-redux';
import { store } from './store/store';
import HomePage from './Pages/BandagePage/HomePage';

function App() {
  return (
    
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}

export default App;
