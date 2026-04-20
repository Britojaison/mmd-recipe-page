import Image from "next/image";
import Link from "next/link";
import { categoryPages } from "./category-data";

const featuredRecipes = categoryPages
  .flatMap((category) =>
    category.recipes.map((recipe) => ({
      ...recipe,
      categorySlug: category.slug,
    })),
  )
  .slice(0, 9);

const testimonials = [
  {
    name: "Umar",
    avatar: "/images/home_page/Ellipse 10.png",
    quote:
      "Rich, delightful and genuinely easy to work with in the kitchen.",
    stars: 2,
  },
  {
    name: "Rahul Menon",
    avatar: "/images/home_page/Ellipse 12.png",
    quote:
      "MilkyMist made my desserts feel smoother and creamier from the very first batch.",
    stars: 5,
  },
  {
    name: "Anjali Nair",
    avatar: "/images/home_page/Ellipse 9.png",
    quote:
      "The texture it adds to kulfi and mousse is so lush that guests notice immediately.",
    stars: 5,
  },
  {
    name: "Vishnu Prasad",
    avatar: "/images/home_page/Ellipse 10.png",
    quote:
      "The balanced sweetness is the best part. It saves time and tastes consistently good.",
    stars: 5,
  },
  {
    name: "Anya",
    avatar: "/images/home_page/Ellipse 13.png",
    quote:
      "From puddings to shakes, this became a kitchen staple in just a week.",
    stars: 2,
  },
];

function StarRating({ stars }: { stars: number }) {
  return (
    <div className="flex gap-1 text-[22px] text-[#ff7a2d]">
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index}>{index < stars ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-[#fffdf8] text-[#1d1847]">
      <section className="bg-[#f5ede2]">
        <div className="mx-auto w-full max-w-[1920px]">
          <Image
            src="/images/home_page/Rectangle 2.png"
            alt="MilkyMist hero background"
            width={5760}
            height={2800}
            priority
            sizes="100vw"
            className="h-auto w-full"
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-4 py-16 text-center md:py-20">
        <h2 className="text-4xl font-black tracking-[-0.04em] text-[#2c2667] md:text-6xl">
          Indulge Your Way
        </h2>

        <div className="mx-auto mt-10 grid max-w-[880px] gap-2 sm:grid-cols-2 lg:grid-cols-4 lg:gap-2">
          {categoryPages.map((item) => (
            <Link
              key={item.title}
              href={`/categories/${item.slug}`}
              className="group flex flex-col items-center gap-4"
            >
              <div className="relative h-[170px] w-[170px] overflow-hidden rounded-full shadow-[0_18px_40px_rgba(35,26,75,0.12)] ring-8 ring-white">
                <Image
                  src={item.homeImage}
                  alt={item.title}
                  fill
                  sizes="170px"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/38" />
                <div className="absolute inset-0 flex items-center justify-center px-5 text-center text-[20px] font-semibold leading-tight text-white">
                  <span className="max-w-[110px] text-[20px] leading-[1.08]">
                    {item.title}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="recipes" className="mx-auto max-w-[1180px] px-4 pb-20 text-center md:pb-24">
        <h2 className="text-4xl font-black tracking-[-0.04em] text-[#2c2667] md:text-6xl">
          Most Loved Recipes
        </h2>
        <p className="mx-auto mt-4 max-w-[560px] text-[16px] leading-7 text-[#5f5a75]">
          Crafted with MilkyMist Condensed Milk, these recipes are rich,
          creamy, and perfect for every sweet craving.
        </p>

        <div className="mt-12 grid gap-x-5 gap-y-8 md:grid-cols-2 xl:grid-cols-3">
          {featuredRecipes.map((recipe) => (
            <Link
              key={`${recipe.categorySlug}-${recipe.slug}`}
              href={`/categories/${recipe.categorySlug}/${recipe.slug}`}
              className="block text-left"
            >
              <div className="relative aspect-[1.08/1] overflow-hidden rounded-[18px] bg-[#f0ebe0]">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="px-1 pt-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#9c9487]">
                  {recipe.categoryLabel}
                </p>
                <h3 className="mt-2 text-[31px] font-bold leading-none tracking-[-0.05em] text-[#1f194b]">
                  {recipe.title}
                </h3>
                <p className="mt-2 text-[14px] leading-6 text-[#5c576f]">
                  {recipe.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-4 pb-20 text-center md:pb-28">
        <div className="relative">
          <div className="absolute left-0 top-0 hidden text-[170px] font-black leading-none text-[#ece9e5] md:block">
            &quot;
          </div>
          <div className="mx-auto max-w-[700px]">
            <h2 className="text-4xl font-black tracking-[-0.04em] text-[#2c2667] md:text-6xl">
              Loved by Dessert Makers
            </h2>
            <p className="mt-4 text-[16px] leading-7 text-[#5f5a75]">
              Real experiences from people who create magic with MilkyMist
              Condensed Milk.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="relative rounded-[22px] border border-[#efe7dc] bg-white px-5 pb-7 pt-7 text-left shadow-[0_20px_40px_rgba(28,19,62,0.09)]"
            >
              <h3 className="text-[18px] font-semibold text-[#1f194b]">
                {testimonial.name}
              </h3>
              <div className="mt-2">
                <StarRating stars={testimonial.stars} />
              </div>
              <p className="mt-4 text-[14px] leading-6 text-[#5c576f]">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="pointer-events-none absolute bottom-2 right-4 text-6xl leading-none text-[#efedec]">
                &quot;
              </div>
            </article>
          ))}
        </div>
      </section>

    </main>
  );
}
