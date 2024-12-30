import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom';
import { CartProvider } from '../components/cartContext';
import { Navbar } from '../components/Navbar';
import { Landing } from '../components/Landing';
import { Home } from '../components/Home';
import { BookDetail } from '../components/BookDetails';
import { Checkout } from '../components/Checkout';
// import './styles/App.scss';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="app-content">
        <Outlet />
      </div>
    </>
  );
};

export const AppRouter = () => {
  return (
    <Router>
      <CartProvider>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/book/:id" element={<BookDetail />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
};

// export const AppRouter = () => {
//     return (
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<LandingPage/>} />
//             <Route element={<Layaout/>}>
//                 <Route path="/home" element={<HomePage/>} />
//                 <Route path="/book/:id" element={<BookPage/>} />
//                 <Route path="/checkout" element={<CheckoutPage/>} />

//                 <Route path="*" element={
//                     <div className="not-found">
//                         <h1>404 - Página no encontrada</h1>
//                     </div>
//                 }/>
//             </Route>
//           </Routes>
//         </BrowserRouter>
//     );
// };