import { Product } from "../Product/Product";
import { SaleLine } from "../SaleLine/SaleLine";
import { Supplier } from "../Supplier/Supplier";
import { ShoppingCart } from "./ShoppingCart";

export class ShoppingCartFactory {
  static createFromGraphql(graphqlCart: any): ShoppingCart {
    const saleLines = graphqlCart.cartLines.map((cartLine: any) => {
      console.log('en el factory ++++++++++++++++ ', cartLine.supplier.company)
      const supplier = new Supplier({company: cartLine.supplier.company, id: cartLine.supplier.id});
      const product = new Product({
        imageUrl: cartLine.product.imageUrl,
        name: cartLine.product.name,
        price: cartLine.product.price,
        brand: cartLine.product.brand,
        description: cartLine.product.description,
        id: cartLine.product.id,
        stock: cartLine.product.stock,
        suppliers: cartLine.product.suppliers,
        volume: cartLine.product.volume,
      });
      return new SaleLine({
        amount: cartLine.amount,
        cart_sale_id: cartLine.cart_sale_id,
        product,
        supplierId: cartLine.supplierId,
        batchId: cartLine.batchId,
        price: cartLine.price,
        saleLineId: cartLine.saleLineId,
        subTotal: cartLine.subTotal,
        supplier,
      });
    });
    const cart = new ShoppingCart({
      lastUpdate: graphqlCart.lastUpdate,
      id: graphqlCart.id,
      saleLines,
    });
    console.log('cart =====> ', cart)
    return cart;
  }
}
