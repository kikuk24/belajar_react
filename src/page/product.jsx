import React, { useEffect, useState } from 'react'
import Button from '../component/Element/Button/Button'
import CardProduct from '../component/Fragment/CardProduct'
import { getDataProduct } from '../services/product.service'
import { useLogin } from '../hooks/useLogin'

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([]);
  const username = useLogin();
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
    
  }, [])
  
  useEffect(() => {
    getDataProduct((data) => {
      setProducts(data);
    });
  },[])


  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((total, item) => {
        const product = products.find((product) => product.id === item.id);
        return total + product.price * item.qty;
      }, 0);
      setTotal(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products])

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = "/login";
  }
  const addToCart = (id) => {
    if (cart.find(item => item.id === id)) {
      setCart(cart.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item));
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  }

  return (
    <>
      <div className="flex justify-end bg-blue-500 h-20 text-white items-center px-10">{username}
      <Button classname="ml-5 bg-red-500" onClick={handleLogout}>Logout</Button>
      </div>
      <div className="flex justify-center py-6">
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
          <CardProduct key={product.id}>
          <CardProduct.Header img={product.image}></CardProduct.Header>
          <CardProduct.Body title={product.title}>
          {product.description}
          </CardProduct.Body>
              <CardProduct.Footer
                price={product.price} 
                id={product.id}
                addToCart={addToCart}
                
              />
          </CardProduct>
      ))}
        </div>
        <div className="w-2/6">
          <h1 className='text-3xl font-bold text-blue-500'>Cart</h1>
          <table className='w-full table-auto text-left text-sm font-light'>
            <thead className='border-b font-medium dark:border-neutral-500'>
              <tr>
                <th className='px-2 py-2'>Product</th>
                <th className='px-2 py-2'>Price</th>
                <th className='px-2 py-2'>Quantity</th>
                <th className='px-2 py-2'>Total</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 &&
                cart.map((item) => {
                const product = products.find((product) => product.id === item.id);
                return (
                  <tr key={item.id}>
                    <td className='whitespace-nowrap px-2 py-2'>{product.title}</td>
                    <td className='whitespace-nowrap px-2 py-2'>{product.price.toLocaleString('id-ID',({styles:'currency',currency:'IDR'}))}</td>
                    <td className='whitespace-nowrap px-2 py-2'>{item.qty}</td>
                    <td className='whitespace-nowrap px-2 py-2'>{(item.qty*product.price).toLocaleString('id-ID',({styles:'currency',currency:'IDR'}))}</td>
                  </tr>
                )
              })}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3} className='px-2 py-2 font-bold'>Total</td>
                <td className='px-2 py-2 font-bold'>{total.toLocaleString('id-ID',({styles:'currency',currency:'IDR'}))} </td>
              </tr>
            </tfoot>
          </table>
        </div>
    </div>
    </>
    
  )
}

export default ProductPage