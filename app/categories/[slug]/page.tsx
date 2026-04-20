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
          className="inline-flex rounded-full bg-white/92 px-4 py-3 shadow-[0_10px_30px_rgba(24,19,66,0.12)] backdrop-blur"
        >
          <Image
            src="/images/home_page/image 6.png"
            alt="MilkyMist home"
            width={572}
            height={220}
            priority
            className="h-auto w-[130px]"
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

      <section className="mx-auto max-w-[1180px] px-4 py-14 text-center md:py-18 lg:py-20">
        <h1 className="text-5xl font-black tracking-[-0.06em] text-[#26216f] md:text-6xl lg:text-[4.1rem]">
          {category.heading}
        </h1>
        <p className="mx-auto mt-4 max-w-[860px] text-[18px] leading-8 text-[#56516d]">
          {category.description}
        </p>

        <div
          id="recipes"
          className="mt-12 grid gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-3"
        >
          {category.recipes.map((recipe) => (
            <Link
              key={recipe.slug}
              href={`/categories/${category.slug}/${recipe.slug}`}
              className="block text-center"
            >
              <div className="relative aspect-[1.06/0.88] overflow-hidden rounded-[20px] bg-[#efe8df] shadow-[0_14px_35px_rgba(27,20,66,0.07)]">
                <Image
                  src={recipe.image}
                  alt={recipe.alt ?? recipe.title}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h2 className="mt-5 text-[20px] font-semibold tracking-[0.01em] text-[#24206b] md:text-[22px]">
                {recipe.title}
              </h2>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
