import { Supplier } from "../Supplier/Supplier";
import { Product } from "./Product";

export class ProductFactory {
  static createFromGraphql(graphqlProduct: any): Product {
    const suppliers = graphqlProduct.suppliers.map(
      (supplier: any) => {
        return new Supplier({ company: supplier.company, id: supplier.id });
      }
    );
    const product = new Product({
      imageUrl: graphqlProduct.imageUrl,
      name: graphqlProduct.name,
      price: graphqlProduct.price,
      brand: graphqlProduct.brand,
      description: graphqlProduct.description,
      id: graphqlProduct.id,
      stock: graphqlProduct.stock,
      volume: graphqlProduct.volume,
      suppliers,
    });
    return product;
  }
}
