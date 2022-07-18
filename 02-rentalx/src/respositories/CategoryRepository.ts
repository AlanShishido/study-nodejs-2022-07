import { Category } from "../model/Category";
import {
  ICategoriesRespository,
  ICreateCategoryDTO,
} from "./ICategoriesRespository";

class CategoriesRepository implements ICategoriesRespository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find(cat => cat.name === name);
    return category;
  }
}

export { CategoriesRepository };
