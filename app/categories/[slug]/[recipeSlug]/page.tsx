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
          className="inline-flex rounded-full bg-white/92 px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-3 shadow-[0_10px_30px_rgba(24,19,66,0.12)] backdrop-blur"
        >
          <Image
            src="/images/home_page/logo.webp"
            alt="MilkyMist home"
            width={572}
            height={220}
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
            preload
            sizes="100vw"
            className="h-auto w-full"
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-4 pb-4 pt-10 text-center sm:pt-14 md:pt-16 lg:pt-20">
        <h1 className="text-3xl font-black tracking-[-0.06em] text-[#2b286f] sm:text-4xl md:text-5xl lg:text-[4rem]">
          {recipe.title}
        </h1>
        <p className="mx-auto mt-3 max-w-[820px] text-[15px] leading-7 text-[#5e5875] sm:text-[17px] sm:leading-8">
          {recipe.intro}
        </p>
      </section>

      <section className="relative mx-auto grid max-w-[1180px] gap-8 px-4 pb-14 pt-8 sm:gap-12 sm:pb-20 sm:pt-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div className="pointer-events-none absolute -left-[210px] top-[-10px] hidden h-[420px] w-[420px] rounded-full bg-[#e5b760] md:block" />

        <div className="relative z-10 overflow-hidden rounded-[14px] shadow-[0_22px_48px_rgba(25,20,67,0.08)] sm:rounded-[20px]">
          <Image
            src={recipe.image}
            alt={recipe.alt ?? recipe.title}
            width={1516}
            height={1276}
            sizes="(max-width: 1024px) 100vw, 48vw"
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="relative z-10 px-0 sm:px-2 lg:px-6">
          <h2 className="text-[26px] font-bold tracking-[-0.04em] text-[#2b286f] sm:text-[34px] md:text-[42px]">
            Main Ingredients
          </h2>
          <ul className="mt-6 space-y-4 text-left text-[16px] leading-7 text-[#3e3958] sm:mt-10 sm:space-y-5 sm:text-[20px] sm:leading-9 md:text-[21px]">
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative mx-auto max-w-[1180px] px-4 pb-14 pt-2 sm:pb-20">
        <div className="grid gap-10 sm:gap-14 lg:grid-cols-[1.2fr_0.82fr] lg:items-start">
          <div>
            <h2 className="text-center text-[26px] font-bold tracking-[-0.04em] text-[#2b286f] sm:text-[34px] md:text-[42px] lg:text-left">
              How to Make
            </h2>

            <div className="mt-6 space-y-4 sm:mt-10 sm:space-y-5">
              {recipe.steps.map((step, index) => (
                <div
                  key={step}
                  className="grid grid-cols-[70px_1fr] gap-3 text-[16px] leading-7 text-[#403a5a] sm:grid-cols-[88px_1fr] sm:gap-4 sm:text-[19px] sm:leading-8 md:grid-cols-[92px_1fr] md:text-[20px]"
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
            <div className="pointer-events-none absolute -right-[120px] top-0 hidden h-[360px] w-[360px] rounded-full bg-[#e5b760] md:block" />

            <div className="relative z-10 overflow-hidden rounded-[18px] shadow-[0_18px_40px_rgba(24,19,66,0.08)]">
              <Image
                src={sharedRecipeHero.image}
                alt="MilkyMist recipe preparation visual"
                width={5760}
                height={2000}
                sizes="(max-width: 1024px) 100vw, 34vw"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-4 pb-16 sm:pb-24">
        <h2 className="text-center text-[26px] font-bold tracking-[-0.05em] text-[#2b286f] sm:text-[36px] md:text-[44px]">
          More Recipes You&apos;ll Love
        </h2>

        <div className="mt-8 grid gap-5 grid-cols-2 sm:mt-12 sm:gap-6 xl:grid-cols-3">
          {relatedRecipes.map((item) => (
            <Link
              key={`${item.categorySlug}-${item.slug}`}
              href={`/categories/${item.categorySlug}/${item.slug}`}
              className="group"
            >
              <div className="overflow-hidden rounded-[14px] bg-[#f2ede6] sm:rounded-[18px]">
                <Image
                  src={item.image}
                  alt={item.alt ?? item.title}
                  width={1516}
                  height={1276}
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                />
              </div>

              <div className="px-1 pt-3 text-left sm:pt-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8a8378] sm:text-[11px]">
                  {item.categoryLabel}
                </p>
                <h3 className="mt-1.5 text-[22px] font-semibold leading-none tracking-[-0.05em] text-[#23206d] sm:mt-2 sm:text-[26px] md:text-[30px]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[12px] leading-5 text-[#5d5873] sm:mt-3 sm:text-[13px]">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center sm:mt-12">
          <Link
            href={`/categories/${category.slug}`}
            className="inline-flex rounded-full border border-[#26216f] px-5 py-2.5 text-[14px] font-semibold text-[#26216f] transition hover:bg-[#26216f] hover:text-white sm:px-6 sm:py-3 sm:text-[15px]"
          >
            Back to {category.title}
          </Link>
        </div>
      </section>
    </main>
  );
}
