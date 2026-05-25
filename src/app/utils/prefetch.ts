// Prefetching is now handled by direct imports in routes.ts
// All routes are bundled together for instant navigation

const prefetchedRoutes = new Set<string>();

export function prefetchRoute(path: string) {
  // No-op since we're using direct imports
  // Routes load instantly without prefetching needed
  prefetchedRoutes.add(path);
}