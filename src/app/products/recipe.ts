export interface IRecipe {
    filename: string;
    name: string;
    imageFilename: string;
    width: string;
    height: string;
    stars: string;
}

export class Recipe implements IRecipe {
    constructor(
        public filename: string,
        public name: string,
        public imageFilename: string,
        public width: string,
        public height: string,
        public stars: string,
    ) { }
}