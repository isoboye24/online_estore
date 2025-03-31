'use client';

import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Product } from '@/types';
import Link from 'next/link';
import Image from 'next/image';

export function ProductCarousel({ data }: { data: Product[] }) {
  return (
    <Carousel
      className="w-full mb-12"
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 10000,
          stopOnInteraction: true,
          stopOnMouseEnter: true,
        }),
      ]}
    >
      <CarouselContent>
        {data.map((product: Product) => (
          <CarouselItem key={product.id}>
            <Link href={`/product/${product.slug}`}>
              <div className="relative   mx-auto  ">
                <Image
                  alt={product.name}
                  src={product.banner!}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-[150px] sm:h-[300px] md:h-[400px] lg:h-[450px]"
                />
                <div className="absolute inset-0 flex items-end justify-center">
                  <h2 className=" bg-gray-900 bg-opacity-0 sm:[text-0.5x1] font-bold px-2 text-white-900  ">
                    {product.name}
                  </h2>
                </div>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
