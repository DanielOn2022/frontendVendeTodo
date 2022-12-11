import { Product } from "../Product/Product";
import { SaleLine } from "../SaleLine/SaleLine";
import { ShoppingCart } from "./ShoppingCart";

export class ShoppingCartFactory {
  static createFromGraphql(graphqlCart: any): ShoppingCart {
    const saleLines = graphqlCart.cartLines.map((cartLine: any) => {
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
      });
    });
    return new ShoppingCart({
      lastUpdate: graphqlCart.lastUpdate,
      id: graphqlCart.id,
      saleLines,
    });
  }
}
