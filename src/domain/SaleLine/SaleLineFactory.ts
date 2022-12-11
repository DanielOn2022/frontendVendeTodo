import { Product } from "../Product/Product";
import { ShoppingCart } from "../ShopppingCart/ShoppingCart";
import { Supplier } from "../Supplier/Supplier";
import { SaleLine } from "./SaleLine";

export class SaleLineFactory {
  static createFromGraphql(graphqlLine: any): SaleLine {
    const supplier = new Supplier({
      company: graphqlLine.supplier.company,
      id: graphqlLine.supplier.id,
    });
    const product = new Product({
      imageUrl: graphqlLine.product.imageUrl,
      name: graphqlLine.product.name,
      price: graphqlLine.product.price,
      brand: graphqlLine.product.brand,
      description: graphqlLine.product.description,
      id: graphqlLine.product.id,
      stock: graphqlLine.product.stock,
      suppliers: graphqlLine.product.suppliers,
      volume: graphqlLine.product.volume,
    });
    return new SaleLine({
      amount: graphqlLine.amount,
      cart_sale_id: graphqlLine.cart_sale_id,
      product,
      supplierId: graphqlLine.supplierId,
      batchId: graphqlLine.batchId,
      price: graphqlLine.price,
      saleLineId: graphqlLine.saleLineId,
      subTotal: graphqlLine.subTotal,
      supplier,
    });
  }

  static createManyFromGraphql(graphqlLines: any): [SaleLine] {
    return graphqlLines.map((line: any) => {
        return this.createFromGraphql(line);
    });
  }

  static createForGrapqhl(sale: SaleLine) {
    return {
      ...sale.snapshot,
      product: {
        ...sale.snapshot.product.snapshot,
        suppliers: undefined,
      },
      supplier: { ...sale.snapshot.supplier?.snapshot },
    };
  }
  static createManyForGraphql(graphqlLines:[SaleLine]){
    return graphqlLines.map((line: any) => {
        return this.createForGrapqhl(line);
    });
  }
}
