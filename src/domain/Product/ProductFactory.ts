import { Supplier } from "../Supplier/Supplier";
import { Product } from "./Product";

export class ProductFactory {
  static createFromGraphql(graphqlProduct: any): Product {
    const suppliers = graphqlProduct.singleProduct.suppliers.map(
      (supplier: any) => {
        return new Supplier({ company: supplier.company, id: supplier.id });
      }
    );
    const product = new Product({
      imageUrl: graphqlProduct.singleProduct.imageUrl,
      name: graphqlProduct.singleProduct.name,
      price: graphqlProduct.singleProduct.price,
      brand: graphqlProduct.singleProduct.brand,
      description: graphqlProduct.singleProduct.description,
      id: graphqlProduct.singleProduct.id,
      stock: graphqlProduct.singleProduct.stock,
      volume: graphqlProduct.singleProduct.volume,
      suppliers,
    });
    return product;
  }
}
