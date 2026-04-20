export type RecipeCard = {
  slug: string;
  title: string;
  image: string;
  alt?: string;
  categoryLabel: string;
  description: string;
  intro: string;
  ingredients: string[];
  steps: string[];
};

export type CategoryData = {
  slug: string;
  title: string;
  heading: string;
  description: string;
  homeImage: string;
  recipes: RecipeCard[];
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function createRecipe(input: Omit<RecipeCard, "slug">): RecipeCard {
  return {
    ...input,
    slug: slugify(input.title),
  };
}

export const sharedRecipeHero = {
  image: "/images/cakes&bakes/Rectangle 2.png",
  alt: "MilkyMist condensed milk hero",
  width: 5760,
  height: 2000,
};

export const categoryPages: CategoryData[] = [
  {
    slug: "indian-sweets",
    title: "Indian Sweets",
    heading: "Explore Indian Sweets",
    description:
      "Discover traditional favorites made richer and creamier with MilkyMist Condensed Milk.",
    homeImage: "/images/home_page/aec6e5c32ea1bd98038072ff974fc443a881291b.png",
    recipes: [
      createRecipe({
        title: "Chocolate Barfi",
        image: "/images/indian_sweets/chocolate-barfi.jpg",
        categoryLabel: "Indian Sweet",
        description:
          "A rich milk-based sweet finished with a glossy chocolate layer and a soft bite.",
        intro:
          "Discover a festive barfi recipe made richer with MilkyMist Condensed Milk.",
        ingredients: [
          "1 cup MilkyMist Condensed Milk",
          "2 cups milk powder",
          "1/2 cup cocoa powder",
          "2 tbsp ghee",
          "1/4 cup chopped nuts",
          "1 tsp cardamom powder",
        ],
        steps: [
          "Grease a tray or line it with parchment paper.",
          "Warm ghee in a pan and add condensed milk.",
          "Mix in milk powder and cocoa powder until smooth.",
          "Cook on low heat until the mixture thickens and leaves the sides.",
          "Stir in cardamom and chopped nuts.",
          "Spread the mixture into the tray and level the top.",
          "Cool completely, slice into squares, and serve.",
        ],
      }),
      createRecipe({
        title: "Chocolate Coconut Laddoo",
        image: "/images/indian_sweets/chocolate-coconut-laddoo.jpg",
        categoryLabel: "Indian Sweet",
        description:
          "Soft laddoos rolled in coconut with a fudgy chocolate center and creamy sweetness.",
        intro:
          "Discover coconut laddoos made extra indulgent with MilkyMist Condensed Milk.",
        ingredients: [
          "1 cup MilkyMist Condensed Milk",
          "2 cups desiccated coconut",
          "2 tbsp cocoa powder",
          "1 tbsp ghee",
          "1/4 tsp cardamom powder",
          "Extra coconut for rolling",
        ],
        steps: [
          "Lightly toast the coconut in a pan for a minute.",
          "Add condensed milk, cocoa powder, and ghee.",
          "Cook gently until the mixture comes together.",
          "Stir in cardamom and let the mixture cool slightly.",
          "Grease your palms and shape into small laddoos.",
          "Roll each laddoo in extra coconut.",
          "Chill briefly and serve.",
        ],
      }),
      createRecipe({
        title: "Chocolate Kheer",
        image: "/images/indian_sweets/chocolate-kheer.jpg",
        categoryLabel: "Classic",
        description:
          "A creamy rice kheer with mellow chocolate notes and a luxurious condensed milk finish.",
        intro:
          "Discover a comforting kheer recipe made richer with MilkyMist Condensed Milk.",
        ingredients: [
          "1 cup MilkyMist Condensed Milk",
          "1/4 cup basmati rice",
          "4 cups milk",
          "2 tbsp cocoa powder",
          "2 tbsp chopped almonds",
          "1 tbsp chopped cashews",
          "1/2 tsp cardamom powder",
        ],
        steps: [
          "Wash the rice and simmer it in milk on low heat.",
          "Cook until the rice turns soft and the milk thickens.",
          "Whisk in condensed milk and cocoa powder.",
          "Add nuts and cardamom powder.",
          "Simmer for a few more minutes until creamy.",
          "Serve warm for comfort or chill for a colder dessert.",
        ],
      }),
      createRecipe({
        title: "Chocolate Modak",
        image: "/images/indian_sweets/chocolate-modak.jpg",
        categoryLabel: "Festive",
        description:
          "Festive modaks with a chocolatey filling and a smooth condensed milk richness.",
        intro:
          "Discover a celebratory modak recipe made richer with MilkyMist Condensed Milk.",
        ingredients: [
          "1 cup MilkyMist Condensed Milk",
          "1 cup milk powder",
          "2 tbsp cocoa powder",
          "1 tbsp ghee",
          "2 tbsp chopped nuts",
          "1 tsp rose water",
        ],
        steps: [
          "Heat ghee in a pan and add condensed milk.",
          "Stir in milk powder and cocoa powder.",
          "Cook until the mixture turns thick and moldable.",
          "Mix in nuts and rose water.",
          "Grease a modak mold and fill it with the mixture.",
          "Set the modaks, unmold them, and serve.",
        ],
      }),
    ],
  },
  {
    slug: "cakes-bakes",
    title: "Cakes and Bakes",
    heading: "Explore Cakes & Bakes",
    description:
      "Discover a variety of cakes and baked delights made richer with MilkyMist Condensed Milk.",
    homeImage: "/images/home_page/07f45ad3ef0650edc516fe363faa6113ca454e99.png",
    recipes: [
      createRecipe({
        title: "Chocolate Lava Cake",
        image: "/images/cakes&bakes/Rectangle 7.png",
        categoryLabel: "Chocolate",
        description:
          "A decadent molten cake with a glossy center and deep chocolate flavor.",
        intro:
          "Discover a rich lava cake made more indulgent with MilkyMist Condensed Milk.",
        ingredients: [
          "1 cup MilkyMist Condensed Milk",
          "1/2 cup dark chocolate",
          "1/2 cup butter",
          "1/2 cup all-purpose flour",
          "2 tbsp cocoa powder",
          "1 tsp baking powder",
        ],
        steps: [
          "Preheat the oven and grease ramekins.",
          "Melt chocolate and butter together until smooth.",
          "Whisk in condensed milk.",
          "Fold in flour, cocoa powder, and baking powder.",
          "Pour the batter into ramekins.",
          "Bake until the edges are set and the center stays molten.",
          "Serve warm right away.",
        ],
      }),
      createRecipe({
        title: "Classic Vanilla Cake",
        image: "/images/cakes&bakes/Rectangle 8.png",
        categoryLabel: "Cake",
        description:
          "A soft and airy vanilla cake with a smooth crumb and a gentle condensed milk sweetness.",
        intro:
          "Discover a variety of cakes made richer with MilkyMist Condensed Milk.",
        ingredients: [
          "1 cup MilkyMist Condensed Milk",
          "1 cup all-purpose flour (maida)",
          "1/2 cup butter (melted)",
          "1/2 cup milk",
          "1 tsp baking powder",
          "1/2 tsp baking soda",
          "1 tsp vanilla essence",
        ],
        steps: [
          "Preheat oven to 180 C and grease a cake pan.",
          "In a bowl, mix condensed milk and melted butter until smooth.",
          "Add milk and vanilla essence, mix well.",
          "Sift flour, baking powder, and baking soda into the mixture.",
          "Gently fold everything into a smooth batter.",
          "Pour into the pan and bake for 30-35 minutes.",
          "Let it cool, slice, and serve.",
        ],
      }),
      createRecipe({
        title: "Eggless Cake",
        image: "/images/cakes&bakes/Rectangle 9.png",
        categoryLabel: "Cake",
        description:
          "A light eggless bake with a tender crumb and a balanced sweetness.",
        intro:
          "Discover an eggless cake made richer with MilkyMist Condensed Milk.",
        ingredients: [
          "1 cup MilkyMist Condensed Milk",
          "1 1/4 cups all-purpose flour",
          "1/2 cup butter",
          "1/2 cup milk",
          "1 tsp baking powder",
          "1/2 tsp baking soda",
          "1 tsp vanilla essence",
        ],
        steps: [
          "Preheat the oven and prepare a cake tin.",
          "Whisk condensed milk, melted butter, and milk.",
          "Add vanilla essence for flavor.",
          "Sift in the dry ingredients.",
          "Fold gently until the batter is smooth.",
          "Bake until golden and cooked through.",
          "Cool before slicing.",
        ],
      }),
      createRecipe({
        title: "Rainbow Cake",
        image: "/images/cakes&bakes/Rectangle 10.png",
        categoryLabel: "Celebration",
        description:
          "A cheerful layered cake with vibrant colors and a soft condensed milk sponge.",
        intro:
          "Discover a colorful celebration cake made richer with MilkyMist Condensed Milk.",
        ingredients: [
          "1 cup MilkyMist Condensed Milk",
          "2 cups all-purpose flour",
          "3/4 cup butter",
          "3/4 cup milk",
          "1 tsp baking powder",
          "Food colors of choice",
          "Whipped cream for layering",
        ],
        steps: [
          "Prepare the cake tins and preheat the oven.",
          "Mix condensed milk, butter, and milk together.",
          "Fold in flour and baking powder.",
          "Divide the batter into bowls and tint each one.",
          "Bake the colored layers separately.",
          "Cool, stack with whipped cream, and frost the cake.",
          "Chill briefly and slice.",
        ],
      }),
      createRecipe({
        title: "Choco Mug Cake",
        image: "/images/cakes&bakes/Rectangle 11.png",
        categoryLabel: "Quick Treat",
        description:
          "A fast microwave mug cake with a soft center and rich chocolate taste.",
        intro:
          "Discover a fuss-free mug cake made richer with MilkyMist Condensed Milk.",
        ingredients: [
          "1/2 cup MilkyMist Condensed Milk",
          "4 tbsp all-purpose flour",
          "2 tbsp cocoa powder",
          "2 tbsp milk",
          "1 tbsp butter",
          "1/4 tsp baking powder",
        ],
        steps: [
          "Combine condensed milk, milk, and melted butter in a mug.",
          "Add flour, cocoa powder, and baking powder.",
          "Mix until smooth with no lumps.",
          "Microwave in short bursts until just set.",
          "Rest for a minute and enjoy warm.",
        ],
      }),
      createRecipe({
        title: "Carrot Cake",
        image: "/images/cakes&bakes/Rectangle 12.png",
        categoryLabel: "Cake",
        description:
          "A moist spiced carrot cake with creamy layers and mellow sweetness.",
        intro:
          "Discover a cozy carrot cake made richer with MilkyMist Condensed Milk.",
        ingredients: [
          "1 cup MilkyMist Condensed Milk",
          "1 1/4 cups grated carrot",
          "1 1/2 cups all-purpose flour",
          "1/2 cup butter",
          "1/2 cup milk",
          "1 tsp cinnamon powder",
          "1 tsp baking powder",
        ],
        steps: [
          "Preheat the oven and grease a cake tin.",
          "Whisk condensed milk, butter, and milk together.",
          "Add grated carrot and cinnamon.",
          "Fold in flour and baking powder.",
          "Bake until the cake is springy and cooked through.",
          "Cool, frost if desired, and serve.",
        ],
      }),
    ],
  },
  {
    slug: "desserts",
    title: "Desserts",
    heading: "Explore Desserts",
    description:
      "Find smooth, chocolatey desserts that turn extra indulgent with MilkyMist Condensed Milk.",
    homeImage: "/images/home_page/f6496f06117faaf1ed931d064263575b9476fcda.png",
    recipes: [
      createRecipe({
        title: "Chocolate Brownie",
        image: "/images/desserts/chocolate-brownie.jpg",
        categoryLabel: "Dessert",
        description:
          "A fudgy brownie with a glossy top and a rich chocolate condensed milk base.",
        intro:
          "Discover a brownie made more indulgent with MilkyMist Condensed Milk.",
        ingredients: [
          "1 cup MilkyMist Condensed Milk",
          "1/2 cup dark chocolate",
          "1/2 cup butter",
          "3/4 cup flour",
          "2 tbsp cocoa powder",
          "1/4 cup chopped nuts",
        ],
        steps: [
          "Preheat the oven and line a brownie tray.",
          "Melt chocolate and butter together.",
          "Whisk in condensed milk until smooth.",
          "Fold in flour, cocoa powder, and nuts.",
          "Spread into the tray and bake until just set.",
          "Cool before slicing into squares.",
        ],
      }),
      createRecipe({
        title: "Chocolate Mousse",
        image: "/images/desserts/chocolate-mousse.jpg",
        categoryLabel: "Dessert",
        description:
          "A silky mousse with deep chocolate flavor and a velvety condensed milk finish.",
        intro:
          "Discover a smooth mousse made richer with MilkyMist Condensed Milk.",
        ingredients: [
          "1 cup MilkyMist Condensed Milk",
          "1 cup whipped cream",
          "1/2 cup melted dark chocolate",
          "1 tsp vanilla essence",
          "Chocolate shavings for garnish",
        ],
        steps: [
          "Melt the chocolate and let it cool slightly.",
          "Fold condensed milk into the chocolate.",
          "Add vanilla essence.",
          "Gently fold in whipped cream until airy.",
          "Pipe or spoon into serving glasses.",
          "Chill until set and garnish before serving.",
        ],
      }),
      createRecipe({
        title: "Chocolate Ice Cream",
        image: "/images/desserts/chocoalte-icecream.jpg",
        categoryLabel: "Dessert",
        description:
          "A creamy frozen dessert with rich chocolate notes and a smooth finish.",
        intro:
          "Discover an ice cream recipe made creamier with MilkyMist Condensed Milk.",
        ingredients: [
          "1 cup MilkyMist Condensed Milk",
          "2 cups chilled cream",
          "1/3 cup cocoa powder",
          "1 tsp vanilla essence",
          "Chocolate chips for texture",
        ],
        steps: [
          "Whip the chilled cream until soft peaks form.",
          "Mix condensed milk with cocoa powder and vanilla.",
          "Fold the chocolate base into the cream.",
          "Add chocolate chips if desired.",
          "Freeze until scoopable and creamy.",
          "Serve chilled.",
        ],
      }),
    ],
  },
  {
    slug: "beverages",
    title: "Beverages",
    heading: "Explore Beverages",
    description:
      "Sip your way through chilled shakes, smoothies, and coffee drinks made creamier with MilkyMist Condensed Milk.",
    homeImage: "/images/home_page/3994e069362ec0fe000e8c91ca67d85eb01bb4bd.png",
    recipes: [
      createRecipe({
        title: "Chocolate Strawberry Smoothie",
        image: "/images/Beverages/chocoalte-strawberry-smoothie.jpg",
        categoryLabel: "Beverage",
        description:
          "A fruity chocolate smoothie with a creamy texture and refreshing finish.",
        intro:
          "Discover a smoothie made creamier with MilkyMist Condensed Milk.",
        ingredients: [
          "1/2 cup MilkyMist Condensed Milk",
          "1 cup strawberries",
          "1 tbsp cocoa powder",
          "1 cup chilled milk",
          "Ice cubes as needed",
        ],
        steps: [
          "Add strawberries, chilled milk, and ice to a blender.",
          "Blend in condensed milk and cocoa powder.",
          "Process until smooth and frothy.",
          "Pour into a tall glass and serve cold.",
        ],
      }),
      createRecipe({
        title: "Chocolate Banana Shake",
        image: "/images/Beverages/chocolate-banana-shake.jpg",
        categoryLabel: "Beverage",
        description:
          "A thick banana shake blended with chocolate and condensed milk for a rich sip.",
        intro:
          "Discover a banana shake made creamier with MilkyMist Condensed Milk.",
        ingredients: [
          "1/2 cup MilkyMist Condensed Milk",
          "2 ripe bananas",
          "1 tbsp cocoa powder",
          "1 1/2 cups chilled milk",
          "Ice cubes as needed",
        ],
        steps: [
          "Blend bananas and milk until smooth.",
          "Add condensed milk and cocoa powder.",
          "Blend again until thick and creamy.",
          "Serve chilled.",
        ],
      }),
      createRecipe({
        title: "Chocolate Cold Coffee",
        image: "/images/Beverages/chocolate-cold-coffee.jpg",
        categoryLabel: "Beverage",
        description:
          "A café-style cold coffee with chocolate notes and a smooth condensed milk sweetness.",
        intro:
          "Discover a cold coffee made creamier with MilkyMist Condensed Milk.",
        ingredients: [
          "1/2 cup MilkyMist Condensed Milk",
          "1 cup chilled milk",
          "1 tbsp instant coffee",
          "1 tbsp cocoa powder",
          "Ice cubes as needed",
        ],
        steps: [
          "Dissolve instant coffee in a little warm water.",
          "Add coffee, milk, condensed milk, cocoa powder, and ice to a blender.",
          "Blend until frothy.",
          "Pour into a glass and serve cold.",
        ],
      }),
      createRecipe({
        title: "Chocolate Milkshake",
        image: "/images/Beverages/chocolate-milkshake.jpg",
        categoryLabel: "Chocolate",
        description:
          "A rich and creamy milkshake blended with chocolate condensed milk for a smooth, indulgent drink.",
        intro:
          "Discover a milkshake made creamier with MilkyMist Condensed Milk.",
        ingredients: [
          "1/2 cup MilkyMist Condensed Milk",
          "2 cups chilled milk",
          "2 tbsp cocoa powder",
          "1 scoop vanilla ice cream",
          "Ice cubes as needed",
        ],
        steps: [
          "Add milk, condensed milk, cocoa powder, and ice cream to a blender.",
          "Blend until smooth and frothy.",
          "Add ice if needed and blend again.",
          "Pour into a tall glass and serve immediately.",
        ],
      }),
      createRecipe({
        title: "Chocolate Peanut Shake",
        image: "/images/Beverages/chocolate-peanut-shake.jpg",
        categoryLabel: "Beverage",
        description:
          "A thick shake with nutty peanut flavor and a creamy chocolate finish.",
        intro:
          "Discover a peanut shake made creamier with MilkyMist Condensed Milk.",
        ingredients: [
          "1/2 cup MilkyMist Condensed Milk",
          "2 tbsp peanut butter",
          "1 1/2 cups chilled milk",
          "1 tbsp cocoa powder",
          "Ice cubes as needed",
        ],
        steps: [
          "Blend chilled milk and peanut butter until smooth.",
          "Add condensed milk and cocoa powder.",
          "Blend until thick and creamy.",
          "Pour into a glass and serve chilled.",
        ],
      }),
    ],
  },
];

export function getCategoryBySlug(slug: string) {
  return categoryPages.find((category) => category.slug === slug);
}

export function getRecipeBySlugs(categorySlug: string, recipeSlug: string) {
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return null;
  }

  const recipe = category.recipes.find((item) => item.slug === recipeSlug);

  if (!recipe) {
    return null;
  }

  return { category, recipe };
}

export function getRelatedRecipes(categorySlug: string, recipeSlug: string) {
  return categoryPages
    .flatMap((category) =>
      category.recipes.map((recipe) => ({
        ...recipe,
        categorySlug: category.slug,
      })),
    )
    .filter(
      (recipe) =>
        !(recipe.categorySlug === categorySlug && recipe.slug === recipeSlug),
    )
    .slice(0, 3);
}
