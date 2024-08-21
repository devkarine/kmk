import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import Blog from '../pages/Blog';
import { QuemSomos } from '../pages/QuemSomos';

export const KmkRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/quemsomos" element={<QuemSomos />} />
      </Routes>
    </BrowserRouter>
  );
};
