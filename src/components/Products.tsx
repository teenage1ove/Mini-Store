import { FC } from 'react'
import { IProduct } from '../types'
import ProductItem from './Product'

const products:IProduct[] = [
    {
        _id: 'wrwdof1rd3',
        name: 'Ноутбук MSI GF900',
        imagePath: 'https://cdn.citilink.ru/hxPsSQ51n6H-jAwVna1rIUyIyhQcJ-vwXQAAvsINfmo/resizing_type:fit/gravity:sm/width:400/height:400/plain/product-images/a789d16f-4943-4b13-b2d4-2f8af5239ce3.jpg',
        price: 3200
    },
    {
        _id: 'wrwdgof1rd4',
        name: 'Ноутбук Honor MagicBook X16',
        imagePath: 'https://cdn.citilink.ru/_Qeno4N5XT0fBuq6eLF8VwG4QIfiHwE1T1_4CSj_59o/resizing_type:fit/gravity:sm/width:400/height:400/plain/product-images/3901d0f1-2b73-4c04-90a7-be00893b2df3.jpg',
        price: 1200
    },
    {
        _id: 'w54wgfh1rd4',
        name: 'Ноутбук Lenovo Thinkbook 16',
        imagePath: 'https://cdn.citilink.ru/mdA10SJKVQW_Nj9Il-ezKPGzRXoQL4qDSIcCDL5tdRM/resizing_type:fit/gravity:sm/width:400/height:400/plain/product-images/9cd9f0b8-01ba-4427-8fba-ace36176959d.jpg',
        price: 2000
    },
    {
        _id: 'wr6gof1rd4',
        name: 'Ноутбук игровой MSI GF63 ',
        imagePath: 'https://cdn.citilink.ru/t30sQiVHtO2rxM_W8_CtWs-KCsy5P4WaMIr9g5dnB6c/resizing_type:fit/gravity:sm/width:400/height:400/plain/product-images/668bcbd5-fcde-4e27-bc75-9b954056bcf1.jpg',
        price: 1500
    },
]

const Products:FC = () => {
    return (
        <div className='mx-auto flex items-center flex-col'>
            {products.map(product => (
                <ProductItem key={product._id} product={product}/>
            ))}
        </div>
    );
}

export default Products;