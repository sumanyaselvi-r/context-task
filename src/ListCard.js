import { useContext } from "react"
import DataContext from './context/DataContext'




function Cart() {
  const { cart, cartCount, IncreaseQuant, DecreaseQuant, RemoveCart, total } = useContext(DataContext)
  return (
    <>
      <h1 style={{ textAlign: 'center', fontFamily: "'Times New Roman', Times, serif", backgroundColor: "bisque" }}>cart({cartCount})</h1>
      <br></br>
      {
        cartCount > 0 ? (<ol className="list-group list-group-numbered">
          {cart.map((item) => (
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <img src={item.image} width={100} height={80}></img>
              <div className="fw-bold"><h3>{item.name}</h3></div>
              Rs.{item.price}


              <div>
                <button class="btn btn-primary" onClick={() => IncreaseQuant(item.id)}>+</button><span>   {item.quantity}    </span>
                <button class="btn btn-primary " onClick={() => DecreaseQuant(item.id)}>-</button>
              </div>
              <button class="btn btn-danger" onClick={() => { RemoveCart(item.id) }}><span >Remove</span></button>


            </li>
          ))}
        </ol>) : <h3 style={{ color: 'black', marginRight: '20px', paddingRight: '20px', textAlign: 'center', fontFamily: "'Times New Roman', Times, serif", fontWeight: "bold", fontSize: "40px" }}>No item in the cart</h3>
      }
      <br></br>
      <div id="total" >Total: Rs.{cart.reduce((total, item) => total + item.totalPrice, 0)}</div>

    </>
  )

}

export default Cart;