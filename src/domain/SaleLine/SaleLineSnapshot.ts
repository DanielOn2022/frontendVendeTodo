import { iSnapshot } from "../iSnapshot";
import { Product } from "../Product/Product";
import { Supplier } from "../Supplier/Supplier";

export type SaleLineSnapshot = iSnapshot & {
    cart_sale_id: number;
    saleLineId?: number | null;
    product: Product;
    supplierId: number;
    batchId?: number | null;
    amount: number;
    price?: number | null;
    subTotal?: number | null;
    supplier?: Supplier | null;
}