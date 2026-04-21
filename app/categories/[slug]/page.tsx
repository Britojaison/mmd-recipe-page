import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  categoryPages,
  getCategoryBySlug,
  sharedRecipeHero,
} from "../../category-data";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return categoryPages.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: "Category Not Found | MilkyMist Desserts",
    };
  }

  return {
    title: `${category.heading} | MilkyMist Desserts`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  return (
    <main className="min-h-full bg-[#fffdf8] text-[#1d1847]">
      <div className="absolute left-4 top-4 z-20 sm:left-6 sm:top-6">
        <Link
          href="/"
          className="inline-flex rounded-full bg-white/92 px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-3 shadow-[0_10px_30px_rgba(24,19,66,0.12)] backdrop-blur"
        >
          <Image
            src="/images/home_page/logo.png"
            alt="MilkyMist home"
            width={572}
            height={220}
            priority
            className="h-auto w-[60px] sm:w-[75px] md:w-[100px]"
          />
        </Link>
      </div>

      <section className="bg-[#efe7dd]">
        <div className="mx-auto w-full max-w-[1600px]">
          <Image
            src={sharedRecipeHero.image}
            alt={sharedRecipeHero.alt}
            width={sharedRecipeHero.width}
            height={sharedRecipeHero.height}
            priority
            unoptimized
            sizes="100vw"
            className="h-auto w-full"
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-4 py-10 text-center sm:py-14 md:py-18 lg:py-20">
        <h1 className="text-3xl font-black tracking-[-0.06em] text-[#26216f] sm:text-4xl md:text-5xl lg:text-[4.1rem]">
          {category.heading}
        </h1>
        <p className="mx-auto mt-3 max-w-[860px] text-[15px] leading-7 text-[#56516d] sm:mt-4 sm:text-[18px] sm:leading-8">
          {category.description}
        </p>

        <div
          id="recipes"
          className="mt-8 grid gap-x-4 gap-y-8 grid-cols-2 sm:mt-12 sm:gap-x-6 sm:gap-y-10 xl:grid-cols-3"
        >
          {category.recipes.map((recipe) => (
            <Link
              key={recipe.slug}
              href={`/categories/${category.slug}/${recipe.slug}`}
              className="block text-center"
            >
              <div className="relative aspect-[1.06/0.88] overflow-hidden rounded-[14px] bg-[#efe8df] shadow-[0_14px_35px_rgba(27,20,66,0.07)] sm:rounded-[20px]">
                <Image
                  src={recipe.image}
                  alt={recipe.alt ?? recipe.title}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h2 className="mt-3 text-[17px] font-semibold tracking-[0.01em] text-[#24206b] sm:mt-5 sm:text-[20px] md:text-[22px]">
                {recipe.title}
              </h2>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
