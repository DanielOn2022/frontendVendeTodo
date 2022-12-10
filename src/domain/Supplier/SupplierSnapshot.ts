import { iSnapshot } from "../iSnapshot";

export type SupplierSnapshot = iSnapshot & {
    id?: number | null;
    name?: string | null,
    cellphone?: string | null,
    company: string,
    availableStock?: number | null;
    stock?: number | null;
    compromised?: number | null;
}