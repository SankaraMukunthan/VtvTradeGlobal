/**
 * Get the full URL for an asset in the public directory
 * @param path The path to the asset relative to the public directory
 * @returns The full URL to the asset
 */
export function getAssetUrl(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `/${cleanPath}`;
}

/**
 * Get the full URL for a product image
 * @param imagePath The path to the product image (e.g., /assets/products/image.png)
 * @returns The full URL to the product image
 */
export function getProductImageUrl(imagePath: string): string {
  // Remove leading slash if present and ensure it points to the correct path
  let cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  // If the path already includes 'assets', use it as is, otherwise prepend 'assets/'
  if (!cleanPath.startsWith('assets/')) {
    cleanPath = `assets/${cleanPath}`;
  }
  
  // Ensure the path starts with a single forward slash
  return `/${cleanPath.replace(/^\/+/, '')}`;
}
