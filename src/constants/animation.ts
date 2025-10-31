export interface AnimationEasing {
  power4Out: string
  expoInOut: string
  slow: (amount: number) => string
}

export const ANIMATION_EASING: AnimationEasing = {
  power4Out: 'power4.out',
  expoInOut: 'expo.inOut',
  slow: (amount: number) => `power${amount}.out`,
}
