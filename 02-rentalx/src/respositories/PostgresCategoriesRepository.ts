import { Category } from "../model/Category";
import {
  ICategoriesRespository,
  ICreateCategoryDTO,
} from "./ICategoriesRespository";

class PostgresCategoriesRespository implements ICategoriesRespository {
  create({ name, description }: ICreateCategoryDTO): null {
    console.log(name, description);
    return null;
  }
  findByName(name: string): Category {
    console.log(name);
    return null;
  }
  list(): Category[] {
    return null;
  }
}

export { PostgresCategoriesRespository };
