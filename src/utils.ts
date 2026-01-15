type NormalizedRGB = {
  r: number;
  g: number;
  b: number;
};

export const hex_to_normalized_rgb = (hex: string): NormalizedRGB => {
  let cleanHex = hex.replace(/^#/, '');
  if (cleanHex.length === 3) {
    cleanHex = cleanHex
      .split('')
      .map((char) => char + char)
      .join('');
  }
  const r = parseInt(cleanHex.substring(0, 2), 16) / 255;
  const g = parseInt(cleanHex.substring(2, 4), 16) / 255;
  const b = parseInt(cleanHex.substring(4, 6), 16) / 255;

  return { r, g, b };
};
