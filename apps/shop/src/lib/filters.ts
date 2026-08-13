import {
  products,
  type Product,
  type ProductCategory,
} from "@atelier-inkstar/catalog";

export type ProductFilters = {
  q?: string;
  franchise?: string;
  category?: ProductCategory | "all";
  spicy?: "all" | "spicy" | "standard";
  availability?: "all" | "available" | "sold-out";
  collection?: string;
};

export function filterProducts(filters: ProductFilters): Product[] {
  const query = filters.q?.trim().toLowerCase() ?? "";

  return products.filter((product) => {
    if (filters.collection && !product.collections.includes(filters.collection as never)) {
      return false;
    }
    if (filters.franchise && product.franchise !== filters.franchise) {
      return false;
    }
    if (filters.category && filters.category !== "all" && product.category !== filters.category) {
      return false;
    }
    if (filters.spicy === "spicy" && !product.spicy) return false;
    if (filters.spicy === "standard" && product.spicy) return false;
    if (filters.availability === "available" && !product.available) return false;
    if (filters.availability === "sold-out" && product.available) return false;

    if (!query) return true;
    const haystack = [
      product.name,
      product.character,
      product.franchise,
      product.baseSku,
      product.description,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(query);
  });
}

export function parseFilters(
  params: Record<string, string | string[] | undefined>,
): ProductFilters {
  const read = (key: string) => {
    const value = params[key];
    return Array.isArray(value) ? value[0] : value;
  };

  return {
    q: read("q"),
    franchise: read("franchise"),
    category: (read("category") as ProductFilters["category"]) || "all",
    spicy: (read("spicy") as ProductFilters["spicy"]) || "all",
    availability: (read("availability") as ProductFilters["availability"]) || "all",
    collection: read("collection"),
  };
}
