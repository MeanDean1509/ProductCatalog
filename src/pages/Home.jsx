import ProductList from '../components/ProductList';
import Header from '../components/Header';
import CategoryFilter from '../components/CategoryFilter';

function Home() {
  return (
    <div>
      <Header />
      <CategoryFilter />
      <h1>Danh sách sản phẩm</h1>
      <ProductList />
    </div>
  );
}

export default Home;