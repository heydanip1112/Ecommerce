'use client';
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="space-y-4">
      <Image
        src={images[current]}
        alt="product image"
        width={600}
        height={600}
        className="w-full h-auto object-contain rounded-xl"
      />
      <div className="flex">
        {images.map((image, index)=> (
            <div key={image} onClick={()=> setCurrent(index)} className={cn('border mr-2 cursor-pointer hover:border-orange-600', current === index && 'border-orange-600')}>
                <Image src={image} alt='image' width={100} height={100} />
            </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
