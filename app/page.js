
import NavigationBar from "@/components/navigation";
import ProductList from "@/components/product-list";

export default function Home() {
 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden">
      <ProductList></ProductList>
    </main>
  );
}
