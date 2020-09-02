export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

export const shuffleArray = (array: Array<any>) => array.sort(() => Math.random() - 0.5);
