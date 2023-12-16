import React from 'react'
import axios from 'axios'
const payment = () => {

    const cartItems = [
        {
          id: 1,
          name: "iPhone 9",
          desc: "An apple mobile which is nothing like apple",
          price: 549,
          cartQuantity: 2,
          discountPercentage: 12.96,
          rating: 4.69,
          stock: 94,
          brand: "Apple",
          category: "smartphones",
          image: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",    
        },
        {
          id: 2,
          name: "iPhone X",
          desc: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
          price: 899,
          cartQuantity: 4,
          discountPercentage: 17.94,
          rating: 4.44,
          stock: 34,
          brand: "Apple",
          category: "smartphones",
          image: "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
        },    
        {
          id: 3,
          name: "Samsung Universe 9",
          desc: "Samsung's new variant which goes beyond Galaxy to the Universe",
          price: 1249,
          cartQuantity: 1,
          discountPercentage: 15.46,
          rating: 4.09,
          stock: 36,
          brand: "Samsung",
          category: "smartphones",
          image: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",    
          desc: "OPPO F19 is officially announced on April 2021.",
          price: 280,
          cartQuantity: 4,
          discountPercentage: 17.91,
          rating: 4.3,
          stock: 123,
          brand: "OPPO",
          category: "smartphones",
          image: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",    
        },
         {
          id: 4,
          name: "OPPOF19",
          desc: "OPPO F19 is officially announced on April 2021.",
          price: 280,
          cartQuantity: 5,
          discountPercentage: 17.91,
          rating: 4.3,
          stock: 123,
          brand: "OPPO",
          category: "smartphones",
          image: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",    
        },
        {
          id: 5,
          name: "Huawei P30",
          desc: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
          price: 499,
          cartQuantity: 2,
          discountPercentage: 10.58,
          rating: 4.09,
          stock: 32,
          brand: "Huawei",
          category: "smartphones",
          image: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
          
        }
      ]
    
    const handleCheckOut = () =>{
        axios
        .post("http://localhost:8000/create-checkout-session", {
            cartItems,
            userId: "15115"
        })
        .then((res)=>{
            if(res.data.url){
                window.location.href = res.data.url
            }
        })
        .catch((err)=> {
            console.log(err.message)
            alert(err.message)
        })
    }

  return (
    <div>
        
        <button 
        onClick={()=> handleCheckOut()}
        style={{ marginTop: "60px", marginLeft: "60px", padding: "10px", color: "#ffffff", background:"red"}}>Payment</button>

    </div>
  )
}

export default payment