import Slidder from "@/components/Slidder"
import ProductList from "@/components/ProductList"
import CategoryList from "@/components/CategoryList"
import NewProductList from "@/components/NewProductList"

const HomePage = () => {
  return (
    <div>
      <Slidder />

      <div className="mt-24 px-4 lg:px-8 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <ProductList />
      </div>

      <div className="mt-24">
        <h1 className="text-2xl px-4 lg:px-8 xl:px-32 2xl:px-64 mb-12">Category</h1>
        <CategoryList />
      </div>

      <div className="mt-24 px-4 lg:px-8 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>
        <NewProductList/>
      </div>
      
    </div>
  )
}

export default HomePage