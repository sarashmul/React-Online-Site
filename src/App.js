import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavBar from './component/Global/NavBar';
import Footer from './component/Global/Footer';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './component/screens/HomePage';
import ProductsPage from './component/screens/ProductsPage';
import ShoppingCartPage from './component/screens/ShoppingCartPage';
import CheckoutPage from './component/screens/CheckoutPage';
import ProductModal from './component/Products/ProductModal';
import SortProduct from './component/Products/SortProduct';

function App() {
  const routes = {
    home: "/",
    products: "/products",
    ShoppingCart: "/ShoppingCart",
    Checkout: "/Checkout",
    product:"/productModal",
    productsByCategory:"/productsByCategory",
    search:"/SortProducts/:text"
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app-container">
          <NavBar />
          
      
          <Routes>
            <Route path={routes.home} element={<HomePage />} />
            <Route path={routes.products} element={<ProductsPage />} />
            <Route path={routes.search} element={<SortProduct/>} />
            <Route path={routes.ShoppingCart} element={<ShoppingCartPage />} />
            <Route path={routes.Checkout} element={<CheckoutPage />} />
            <Route path={routes.product} element={<ProductModal/>}/>
            <Route path={routes.productsByCategory}element={<ProductsPage/>}/>
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
