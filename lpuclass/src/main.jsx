// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//     <StrictMode>
//     <App />
//     </StrictMode>
// )
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore } from 'redux' 
import { todoReducer } from './redux/todoReducer' 

const store = createStore(todoReducer)

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)