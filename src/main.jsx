import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './assets/css/style.scss'
import { store } from './store/index.js';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)
