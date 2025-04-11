
import { useContext, useEffect } from "react"

import Slidder from "@/components/Slidder"
import ProductList from "@/components/ProductList"
import CategoryList from "@/components/CategoryList"
import NewProductList from "@/components/NewProductList"
import { useWixClient } from "@/hooks/useWixClient"
import { Suspense } from "react"

const HomePage = () => {

  // const wixClient = useWixClient();

  // const getProducts = async () => {
  //   const res = await  wixClient.products.queryProducts().find();
  //   console.log(res)
  // }

  // useEffect(()=>{
  //   getProducts();

  // },[wixClient])

  return (
    <div>
      <Slidder />

      <div className="mt-24 px-4 lg:px-8 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <Suspense fallback={"Loading..."}>
          <ProductList 
            categoryId = {process.env.FEATURED_PRODUCT_CATEGORY_ID}
            limit={4}
          />
        </Suspense>
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