import { SetStateAction,Dispatch } from 'react'


export interface IProduct {
    _id: string,
    name: string,
    imagePath: string,
    price: number,
}

export interface ICartItem extends IProduct {
    count: number
}

export enum actionTypes {
    CART_ADD_ITEM = 'CART_ADD_ITEM',
    CART_REMOVE_ITEM = 'CART_REMOVE_ITEM',
}

interface ICartAddItemPayload {
    product: IProduct,
    count: number
}

interface ICartAddItem {
    type: actionTypes.CART_ADD_ITEM,
    payload: ICartAddItemPayload
}

interface ICartRemoveItem {
    type: actionTypes.CART_REMOVE_ITEM,
    payload: string
}

export type TypeActionCart = ICartAddItem | ICartRemoveItem
export type TypeState<T> = Dispatch<SetStateAction<T>>