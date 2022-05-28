import { User } from "./auth.interface";
import { Product } from "./product.interface";

export interface Color {
    name: string;
}

export interface Size {
    name: string;
}

export interface EachCart {
    product: Product;
    user: User;
    count: number;
    color: Color;
    size: Size;
}

export interface CartState {
    cart_items: EachCart[]
}

export interface CartDispatch {
    type: string;
    payload: CartState;
}
