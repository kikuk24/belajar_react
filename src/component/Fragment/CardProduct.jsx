import Button from "../Element/Button/Button"

const CardProduct = (props) => {
  const { children } = props
  return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-400 rounded-lg shadow mx-3 my-3">
      {children}
    </div>
  )
}
const Header = (props) => {
  const { img } = props
  return (
    <a href="">
          <img src={img} alt="" className="p-8 rounded-t-lg h-60 w-full object-cover" />
    </a>
  )
}

const Body = (props) => {
  const { children, title } = props
  return (
    <div className="px-5 pb-5">
        <a href="#">
        <h5 className="font-bold text-lg text-white">{ title.substring(0,20) }...</h5>
          </a>
      <p className="text-m text-white">{ children.substring(0, 100) }...</p>
          
        </div>
  )
}
const Footer = (props) => {
  const { price,addToCart,id } = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-xl font-bold text-white">Rp {price.toLocaleString('id-ID',({styles:'currency',currency:'IDR'}))}</span>
            <Button classname="bg-blue-500 hover:bg-blue-800" onClick={()=>addToCart(id)}>Add to cart</Button>
          </div>
  )
}


CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
export default CardProduct