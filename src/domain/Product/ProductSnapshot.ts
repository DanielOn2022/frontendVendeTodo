
import { iSnapshot } from "../iSnapshot";
import { Supplier } from "../Supplier/Supplier";

export type ProductSnapshot = iSnapshot & {
  id?: number | null,
  name: string;
  description?: string | null;
  brand?: string | null;
  price: number;
  volume?: number | null;
  imageUrl: string;
  stock?: number | null;
  suppliers?: Array<Supplier> | [];
}