import { FC } from 'react'
import { TypeState } from '../types'

interface IQuantity {
    count: number
    setCount: TypeState<number>
}

const Quantity:FC<IQuantity> = ({count, setCount}) => {

    return (
        <div className='flex items-center justify-between w-1/5'>
            <button onClick={() => count < 30 && setCount(count + 1)}>+</button>
            <input type="number" onChange={e => setCount(+e.target.value)} value={count} min={1} className='w-10 border-solid border-2 '/>
            <button onClick={() => count > 1 && setCount(count - 1)}>-</button>
        </div>
        
    );
}

export default Quantity;