/**
 * Единая цветовая шкала блоков: от фиолетового (280°) к синему (212°).
 * progress — доля пути от первого элемента к последнему (0…1).
 */
export function rampHsl(progress: number, alpha: number): string {
  return `hsl(${280 - progress * 68} 72% 55% / ${alpha})`
}

export function rampAccent(progress: number): string {
  return `hsl(${280 - progress * 68} 85% 78%)`
}
