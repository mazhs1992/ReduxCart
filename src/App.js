import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';

function App() {

  const swowCart = useSelector(state => state.ui.cartIsVisible)

  return (
    <Layout>
      {swowCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
