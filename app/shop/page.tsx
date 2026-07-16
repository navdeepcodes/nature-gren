import Navbar from "@/components/layout/Navbar";
import AnimatedBackground from "@/components/background/AnimatedBackground";
import Footer from "@/components/homepage/Footer";

import Container from "@/components/layout/Container";

import ShopHeader from "@/components/shop/ShopHeader";
import ShopClient from "@/components/shop/ShopClient";

import { getShopProducts } from "@/lib/shop/products";
import { getShopCategories } from "@/lib/shop/categories";

export default async function ShopPage() {
  const [products, categories] = await Promise.all([
    getShopProducts(),
    getShopCategories(),
  ]);

  return (
    <>
      <AnimatedBackground />

      <Navbar />

      <main className="relative z-10">
        <ShopHeader />

        <section className="pt-4 pb-24 lg:pt-8 lg:pb-32">
          <Container>
            <ShopClient
              products={products}
              categories={categories}
            />
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}