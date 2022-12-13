import { iSnapshot } from "../iSnapshot";

export type PaymentMethodSnapshot = iSnapshot & {
    cardNumber?: number | null;
    clientId: number;
}