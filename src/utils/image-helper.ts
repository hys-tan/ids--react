/**
 * Generates the correct URL for an asset located in the src/assets folder.
 * This allows Vite to process the asset and apply hashes for cache busting.
 * @param name The filename of the asset (e.g., 'logo.png').
 */
export const getImageUrl = (name: string): string => {
  return new URL(`../assets/${name}`, import.meta.url).href;
};
