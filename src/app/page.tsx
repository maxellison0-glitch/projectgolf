import { HERO_PRODUCT } from "@/data/products";
import { ProductLanding } from "@/components/ProductLanding";

/* One-product store: the homepage IS the landing page the ads point at. */
export default function Home() {
  return <ProductLanding product={HERO_PRODUCT} />;
}
