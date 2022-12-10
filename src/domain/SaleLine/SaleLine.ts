import { iEntity } from "../iEntity";
import { Product } from "../Product/Product";
import { SaleLineSnapshot } from "./SaleLineSnapshot";

export class SaleLine implements iEntity {

    private cart_sale_id: number;
    private saleLineId?: number | null;
    private product: Product;
    private supplierId: number;
    private batchId?: number | null;
    private amount: number;
    private price?: number | null;
    private subTotal?: number | null;

  constructor(data: {
    cart_sale_id: number;
    saleLineId?: number | null;
    product: Product;
    supplierId: number;
    batchId?: number | null;
    amount: number;
    price?: number | null;
    subTotal?: number | null;
  }) {
    this.cart_sale_id = data.cart_sale_id;
    this.saleLineId = data.saleLineId;
    this.batchId = data.batchId;
    this.supplierId = data.supplierId;
    this.product = data.product;
    this.amount = data.amount;
    this.price = data.price || this.product.snapshot.price;
    this.subTotal = data.subTotal || (this.price as unknown as number * this.amount) as unknown as number;
  }

  get snapshot(): SaleLineSnapshot {
    return {
      cart_sale_id: this.cart_sale_id,
      saleLineId: this.saleLineId,
      product: this.product,
      supplierId: this.supplierId,
      batchId: this.batchId,
      amount: this.amount,
      price: this.price,
      subTotal: this.subTotal
    };
  }

  setNewSaleLineIds(saleLine: SaleLine): void {
    this.saleLineId = saleLine.snapshot.saleLineId;
    this.batchId = saleLine.snapshot.batchId;
  }

}