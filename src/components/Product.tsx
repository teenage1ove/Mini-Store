import { FC, useState } from 'react'
import { IProduct } from '../types'
import Quantity from './Quantity'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/cart/actions'

interface IProductItem {
    product: IProduct
}


const ProductItem:FC<IProductItem> = ({product}) => {
    const [count, setCount] = useState(1)

    const dispatch = useDispatch()
    const addHandler = () => {
        dispatch(addToCart(product, count))
    }

    return (
        <div className='shadow-sm rounded-md m-3 bg-white px-12 py-3 flex flex-col '>
            <img src={product.imagePath} alt={product.name} width={300}/>
            <div className='text-lg'>{product.name}</div>
            <div className='text-sm text-gray-600'>{product.price}$</div>
            <Quantity count={count} setCount={setCount}/>
            <button className='mt-2 mb-2 bg-black text-white px-3 py-1 rounded-md transition-all hover:bg-gray-800' onClick={() => addHandler()}>В корзину</button>
        </div>
    );
}

export default ProductItem;