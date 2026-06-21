import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route , Routes , BrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import MainLayout from './components/MainLayout'
import LoginPage from './pages/LoginPage'
import ProtectedRoute from './components/ProtectedRoute'
import Dashboard from './pages/Dashboard'
import ProductPage from './pages/ProductPage'
import ProductDetailPage from './pages/ProductDetailPage'
import CartPage from './pages/CartPage'
import FavoritePage from './pages/FavoritePage'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<MainLayout/>}>
       <Route index element={<HomePage/>}/>
       <Route path='contact-us' element={<ContactPage/>}/>
       <Route path='products' element={<ProductPage/>}/>
       <Route path='about-us' element={<AboutPage/>}/>
       <Route
        path='dashboard' 
        element={
        <ProtectedRoute>
          <Dashboard/>
        </ProtectedRoute>}/>
       <Route path='login' element={<LoginPage />}/>
       <Route path='products/:id' element={<ProductDetailPage/>}/>
       <Route path='Cart' element={<CartPage/>}/>
       <Route path='Favorites' element={<FavoritePage/>}/>
      </Route>
     </Routes>
    </BrowserRouter>
  </StrictMode>,
);
