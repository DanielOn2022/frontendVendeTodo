import { Product } from "../Product/Product";
import { ProductFactory } from "../Product/ProductFactory";
import { Supplier } from "../Supplier/Supplier";
import { Section } from "./Section";

export class SectionFactory {
  static createFromGraphql(graphqlSection: any): Section {

    const product = ProductFactory.createFromGraphql(graphqlSection.product);
    const section = new Section({
      capacity: graphqlSection.capacity,
      shelfId: graphqlSection.shelfId,
      sectionNumber: graphqlSection.sectionNumber,
      product: product,
    });

    return section;
  }
}
