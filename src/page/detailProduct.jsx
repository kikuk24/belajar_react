import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProduct } from "../services/product.service"
import Nav from "../component/Fragment/Nav";
import Button from "../component/Element/Button/Button";

const DetailProduct = () => {
  const { id } = useParams();
  const [products, setProducts] = useState({})
  useEffect(() => {
    getProduct(id, (data) => {
      setProducts(data)
    })
  }, [id])
  console.log(products)
  return (
    <>
      <div className="flex justify-center py-6">
        <div className="w-1/2 flex items-center justify-center h-screen bg-slate-500">
          <img className="items-center w-60 bg" src={products.image} alt={products.title} />
        </div>
        <div className="w-1/2">
          <div className="mx-9">
          <h1 className="text-6xl font-bold">{products.title}</h1>
          <p className="text-9xl font-medium my-4">$ {products.price}</p>
            <p className="text-sm mb-5">{products.description}</p>
            <Button></Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailProduct