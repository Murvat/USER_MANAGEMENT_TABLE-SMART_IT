import ReactDOM from 'react-dom/client'; 
import App from './App';
import { Provider } from 'react-redux';
import store  from './store/index'; 

const rootElement = document.getElementById('root') as HTMLElement;

const root = ReactDOM.createRoot(rootElement); 

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
