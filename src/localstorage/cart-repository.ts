import { OrderDTO } from "../models/order";
import { CART_KEY } from '../utils/system';

export function save(cart: OrderDTO) {
    const saveCart: string  = JSON.stringify(cart);
    localStorage.setItem(CART_KEY, saveCart)

}

export function get() : OrderDTO {
    const cartEmpty: string = '{"items":[]}';
    const cartFull: string = localStorage.getItem(CART_KEY) ?? cartEmpty;
    return JSON.parse(cartFull);
}