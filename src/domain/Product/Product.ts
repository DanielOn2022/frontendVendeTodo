import { ProductSnapshot } from "./ProductSnapshot";
import { iEntity } from "../iEntity";

export class Product implements iEntity {
  private readonly id?: number | null;
  private name: string;
  private price: number;
  private brand: string;

  constructor(data: {
    id?: number | null;
    name: string;
    price: number;
    brand: string;
  }) {
    this.id = data.id;
    this.name = data.name;
    this.price = data.price;
    this.brand = data.brand;
  }

  get snapshot(): ProductSnapshot {
    return {
      id: this.id,
      name: this.name,
      price: this.price,
      brand: this.brand,
    };
  }

  updateValues(newName: string, newPrice: number, newBrand: string): void {
    this.name = newName;
    this.price = newPrice;
    this.brand = newBrand;
  }
}