import { FC, useState } from 'react'
import logoImage from '../assets/images/opensearch-icon.svg'
import cartImage from '../assets/images/bx-cart.svg'

import cn from 'classnames'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../store/cart/actions'


const Header:FC = () =>{
    const cart = useTypedSelector(state => state.cart)
    const [isShowCart, setIsShowCart] = useState(false)
    const dispatch = useDispatch()
    const total = cart.reduce((acc,item) => {
        return acc+item.price
    }, 0)

    const removeHandler = (id: string) => {
        dispatch(removeFromCart(id))
    }

    return (
        <div className='flex items-center justify-between relative bg-black w-full px-10 py-2 shadow-lg'>
            <img src={logoImage} alt="logo" width={45}/>

            <h2 className='text-slate-50 font-medium    uppercase text-xl'>E-commerce</h2>

            <button className='bg-transparent border-none relative' onClick ={() => setIsShowCart(!isShowCart)}>
                <img src={cartImage} alt="logo" width={30}/>
                <div className='text-red-600 absolute top-4 right-0 p-1 rounded-full bg-white w-5 h-5 flex items-center justify-center'>{cart.length}</div>
            </button>

            <div className={cn('absolute top-20 right-0 shadow-md px-2 py-2 ', {
                hidden: !isShowCart
            })}>
                
                    {cart.map(item => (
                        <div className='flex items-center mb-4 mr-3 pr-3 py-3' key={`cart item ${item.name}`}>
                            <img src={item.imagePath} alt={item.imagePath} width={55} height={55} className='mr-3'/>
                            <div>
                                <div>{item.name}</div>
                                <div>{`${item.count} x ${item.price.toLocaleString()}$`}</div>
                                <button className='text-red-600 bg-transparent border-0' onClick={() => removeHandler(item._id)}>Удалить</button>
                            </div>
                        </div>
                    ))}


    
                    <div className='text-lg border-solid border-t-2 border-gray-300 pt-1 mt-2'>Total: <b>{total.toLocaleString()}$</b></div>
            </div>
        </div>
    );
}

export default Header;