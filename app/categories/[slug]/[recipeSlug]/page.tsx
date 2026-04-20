import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  categoryPages,
  getRecipeBySlugs,
  getRelatedRecipes,
  sharedRecipeHero,
} from "../../../category-data";

type RecipePageProps = {
  params: Promise<{ slug: string; recipeSlug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return categoryPages.flatMap((category) =>
    category.recipes.map((recipe) => ({
      slug: category.slug,
      recipeSlug: recipe.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: RecipePageProps): Promise<Metadata> {
  const { slug, recipeSlug } = await params;
  const match = getRecipeBySlugs(slug, recipeSlug);

  if (!match) {
    return {
      title: "Recipe Not Found | MilkyMist Desserts",
    };
  }

  return {
    title: `${match.recipe.title} | MilkyMist Desserts`,
    description: match.recipe.description,
  };
}

export default async function RecipePage({ params }: RecipePageProps) {
  const { slug, recipeSlug } = await params;
  const match = getRecipeBySlugs(slug, recipeSlug);

  if (!match) {
    notFound();
  }

  const { category, recipe } = match;
  const relatedRecipes = getRelatedRecipes(slug, recipeSlug);

  return (
    <main className="min-h-full overflow-hidden bg-[#fffdf8] text-[#1d1847]">
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

      <section className="mx-auto max-w-[1180px] px-4 pb-4 pt-14 text-center md:pt-16 lg:pt-20">
        <h1 className="text-5xl font-black tracking-[-0.06em] text-[#2b286f] md:text-6xl lg:text-[4rem]">
          {recipe.title}
        </h1>
        <p className="mx-auto mt-3 max-w-[820px] text-[17px] leading-8 text-[#5e5875]">
          {recipe.intro}
        </p>
      </section>

      <section className="relative mx-auto grid max-w-[1180px] gap-12 px-4 pb-20 pt-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div className="pointer-events-none absolute -left-[210px] top-[-10px] h-[420px] w-[420px] rounded-full bg-[#e5b760]" />

        <div className="relative z-10 overflow-hidden rounded-[20px] shadow-[0_22px_48px_rgba(25,20,67,0.08)]">
          <Image
            src={recipe.image}
            alt={recipe.alt ?? recipe.title}
            width={1516}
            height={1276}
            unoptimized
            sizes="(max-width: 1024px) 100vw, 48vw"
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="relative z-10 px-2 lg:px-6">
          <h2 className="text-[34px] font-bold tracking-[-0.04em] text-[#2b286f] md:text-[42px]">
            Main Ingredients
          </h2>
          <ul className="mt-10 space-y-5 text-left text-[20px] leading-9 text-[#3e3958] md:text-[21px]">
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative mx-auto max-w-[1180px] px-4 pb-20 pt-2">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.82fr] lg:items-start">
          <div>
            <h2 className="text-center text-[34px] font-bold tracking-[-0.04em] text-[#2b286f] md:text-[42px] lg:text-left">
              How to Make
            </h2>

            <div className="mt-10 space-y-5">
              {recipe.steps.map((step, index) => (
                <div
                  key={step}
                  className="grid grid-cols-[88px_1fr] gap-4 text-[19px] leading-8 text-[#403a5a] md:grid-cols-[92px_1fr] md:text-[20px]"
                >
                  <div className="font-medium text-[#3f3a59]">
                    Step {index + 1}
                  </div>
                  <div>{step}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:pt-16">
            <div className="pointer-events-none absolute -right-[120px] top-0 h-[360px] w-[360px] rounded-full bg-[#e5b760]" />

            <div className="relative z-10 overflow-hidden rounded-[18px] shadow-[0_18px_40px_rgba(24,19,66,0.08)]">
              <Image
                src={sharedRecipeHero.image}
                alt="MilkyMist recipe preparation visual"
                width={5760}
                height={2000}
                unoptimized
                sizes="(max-width: 1024px) 100vw, 34vw"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-4 pb-24">
        <h2 className="text-center text-[36px] font-bold tracking-[-0.05em] text-[#2b286f] md:text-[44px]">
          More Recipes You&apos;ll Love
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {relatedRecipes.map((item) => (
            <Link
              key={`${item.categorySlug}-${item.slug}`}
              href={`/categories/${item.categorySlug}/${item.slug}`}
              className="group"
            >
              <div className="overflow-hidden rounded-[18px] bg-[#f2ede6]">
                <Image
                  src={item.image}
                  alt={item.alt ?? item.title}
                  width={1516}
                  height={1276}
                  unoptimized
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                />
              </div>

              <div className="px-1 pt-4 text-left">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8a8378]">
                  {item.categoryLabel}
                </p>
                <h3 className="mt-2 text-[30px] font-semibold leading-none tracking-[-0.05em] text-[#23206d]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[13px] leading-5 text-[#5d5873]">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href={`/categories/${category.slug}`}
            className="inline-flex rounded-full border border-[#26216f] px-6 py-3 text-[15px] font-semibold text-[#26216f] transition hover:bg-[#26216f] hover:text-white"
          >
            Back to {category.title}
          </Link>
        </div>
      </section>
    </main>
  );
}
