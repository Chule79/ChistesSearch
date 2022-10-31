import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import NotFound from './pages/404';
import { Chiste } from './pages/Chiste';
import { Chistes } from './pages/Chistes';
import { Crear } from './pages/Create';
import { Search } from './pages/Search';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Chistes />} />
          <Route path="chistes/:id" element={<Chiste />} />
          <Route path="crear" element={<Crear />} />
          <Route path="search" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
