import { createContext, useState } from "react";

const DataContext = createContext({})
export const DataProvider = ({ children }) => {




  const  Details = [{
    id: 1,
    name: "Watch",
    price: 4000,
    image: "https://c0.wallpaperflare.com/preview/940/907/612/watch-product-aesthetic-classy.jpg"

  },
  {
    id: 2,
    name: "Shoe",
    price: 5000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzOe9XFye0F0Uj1laaYxUAK95GCsap1dxddw&usqp=CAU"

  },
  {
    id: 3,
    name: "Camera",
    price: 20000,
    image: "https://i.pcmag.com/imagery/reviews/02Uc53QnK54VMTtvk3KzxLJ-1.fit_lim.size_840x473.v1677603207.jpg"

  },
  {
    id: 4,
    name: "kettle",
    price: 3000,
    image: "https://images.meesho.com/images/products/206219579/afkxm_512.webp"

  },
  {
    id: 5,
    name: "camera",
    price: 40000,
    image: "https://expertphotography.b-cdn.net/wp-content/uploads/2020/11/product-photography-tips-17-1.jpg"


  },
  {
    id: 6,
    name: "bottels",
    price: 550,
    image: "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png"

  },
  {
    id: 7,
    name: "Lotion",
    price: 400,
    image: "https://spectrum-brand.com/cdn/shop/products/58cm-artificial-monstera-plain-leaf-stem-photography-styling-prop-lifestyle-inuse-2-2.jpg?v=1631722954&width=1001s"

  }
    , {
    id: 8,
    name: "Watch",
    price: 25000,
    image: "https://c0.wallpaperflare.com/preview/940/907/612/watch-product-aesthetic-classy.jpg"

  },
  {
    id: 9,
    name: "kettle",
    price: 3000,
    image: "https://images.meesho.com/images/products/206219579/afkxm_512.webp"

  },
  ]



  let [cart, setCart] = useState([]);
  let [total, setTotal] = useState(0);


  let AddToCart = (product) => {
    console.log("add")
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
            totalPrice: (item.quantity + 1) * item.price,
          };
        }
        return item;
      });
      setCart(updatedCart);

    } else {
      setCart([...cart, { ...product, quantity: 1, totalPrice: product.price }]);
    }

    setTotal(total + product.price)

  }

  const RemoveCart = (productId) => {
    const removedItem = cart.find((item) => item.id === productId);
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);

    // Update total
    setTotal((prevTotal) => prevTotal - removedItem.totalPrice);
  };




  const IncreaseQuant = (productId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        const previousTotal = item.totalPrice;
        const newQuantity = item.quantity + 1;
        const newTotalPrice = newQuantity * item.price;
        return {
          ...item,
          quantity: newQuantity,
          totalPrice: newTotalPrice,
          total: newTotalPrice - previousTotal,
        };
      }
      return item;
    });
    setCart(updatedCart);
    setTotal((prevTotal) => prevTotal + cart.find((item) => item.id === productId).price);
  };


  const DecreaseQuant = (productId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId && item.quantity > 0) {
        const previousTotal = item.totalPrice;
        const newQuantity = item.quantity - 1;
        const newTotalPrice = newQuantity * item.price;
        return {
          ...item,
          quantity: newQuantity,
          totalPrice: newTotalPrice,
          total: newTotalPrice - previousTotal,
        };
      }
      return item;
    });
    setCart(updatedCart);
    setTotal((prevTotal) => prevTotal - cart.find((item) => item.id === productId).price);
  };
  const cartCount = cart.length;


  return (<DataContext.Provider value={{ cart, total, Details, AddToCart, RemoveCart, IncreaseQuant, DecreaseQuant, cartCount }}>
    {children}
  </DataContext.Provider>)
}
export default DataContext