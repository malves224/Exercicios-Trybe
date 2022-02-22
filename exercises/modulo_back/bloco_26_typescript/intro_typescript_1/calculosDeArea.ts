export const calculateDiamond = (D: number, d: number): number =>  (D * d) / 2

export const calculateTrapeze = (b: number, B: number, h: number): number => ((b + B) * h) / 2

export const calculateCircle = (r: number): number => Math.PI * Math.pow(r, 2);