import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import router from '@/router';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import './index.css';
import 'react-loading-skeleton/dist/skeleton.css';
import "swiper/css";
import "swiper/css/navigation";


const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer theme="dark" position="bottom-center" />
    </Provider>
  </React.StrictMode>
);
