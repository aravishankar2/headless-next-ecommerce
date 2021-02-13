import { AriaAttributes, DOMAttributes } from "react";
import Hit from "./components/layout/Search.component";
import { Product } from "./interfaces/Product";

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    attribute?: string;
    // hit?: Product
    tagName?: string;
    hit?: Hit
  }
};