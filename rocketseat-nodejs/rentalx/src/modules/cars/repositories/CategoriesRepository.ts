import { Category } from "../model/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "./ICategoriesRepossitory";


class CategoriesRepository implements ICategoriesRepository {
    private categories: Category[];

    constructor() {
        this.categories = [];
    }

    create({ description,name }: ICreateCategoryDTO): void {
        const category = new Category(); 
    
    Object.assign(category, {
        name,
        description,
        created_at: new Date()

    });

    this.categories.push(category);

    }

    list(): Category[] {
        return this.categories;
    }

    findByName(name: string): Category {
        const category = this.categories.find((category) => category.name === name);
        return category;
    }

}

export { CategoriesRepository }