import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getProductBySlug } from "@/lib/actions/product.actions";
import { notFound } from "next/navigation";
import ProductPrice from "@/components/shared/product/product-price";
import ProductImages from "@/components/shared/product/product-images";

interface PageProps {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

const ProductDetailsPage = async ({ params }: PageProps) => {
  const { slug } = params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start">

        {/* IMAGENES */}
        <div className="col-span-2">
          <ProductImages images={product.images} />
        </div>

        {/* INFORMACIÓN */}
        <div className="col-span-2 space-y-4">
          <p className="text-sm text-muted-foreground">
            {product.brand} {product.category}
          </p>
          <h1 className="text-2xl font-semibold">{product.name}</h1>
          <p className="text-sm text-muted-foreground">
            {product.rating} of {product.numReviews} Reviews
          </p>
          <ProductPrice
            value={Number(product.price)}
            className="inline-block w-fit rounded-full bg-green-100 text-green-700 px-5 py-2 font-semibold"
          />
          <div className="mt-6">
            <p className="font-semibold">Description</p>
            <p className="text-sm text-muted-foreground">{product.description}</p>
          </div>
        </div>

        {/* TARJETA DE ACCIONES */}
        <div className="col-span-1">
          <Card className="shadow-sm border rounded-xl">
            <CardContent className="p-6 space-y-4">
              <div className="flex justify-between text-sm">
                <p className="text-muted-foreground">Price</p>
                <ProductPrice value={Number(product.price)} />
              </div>
              <div className="flex justify-between text-sm">
                <p className="text-muted-foreground">Status</p>
                {product.stock > 0 ? (
                  <Badge variant="outline">In stock</Badge>
                ) : (
                  <Badge variant="destructive">Out of stock</Badge>
                )}
              </div>
              {product.stock > 0 && (
                <Button className="w-full">Add To Cart</Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
