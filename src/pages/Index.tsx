import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductsSection />
      <GallerySection />
      <Footer />
    </div>
  );
};

export default Index;
