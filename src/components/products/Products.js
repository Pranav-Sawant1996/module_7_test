import React from 'react'
import './Products.css'
import ProductCard from './ProductCard';

function Products() {
  const[listItem,setListItem]= React.useState([])
  const list=[];
React.useEffect(()=>{
    fetch('https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json')
    .then(response => {
        return response.json()
        // console.log(response)
    })
    .then(
        (data) => {
            // console.log(data)
            let list=[];
            for(const key in data){
                list.push({
                    id:data[key].id,
                    newPrice:data[key].newPrice,
                    oldPrice:data[key].oldPrice,
                    productImage:data[key].productImage,
                    productName:data[key].productName
                })
            }
            setListItem(list)
            console.log('list', list)
        }
    )
},[])
  return (
    <div className='products'>
      <h3>Products</h3>
    <div className='product-list'>

      {
        listItem && listItem.map((item,index)=>{
            return(
                <ProductCard
                  key={item.id}
                  image={item.productImage}
                  oldPrice={item.oldPrice}
                  newPrice={item.newPrice}
                  name={item.productName}
                />
            )
        }

        )
      
       }
    </div>
       

    </div>
  )
}

export default Products