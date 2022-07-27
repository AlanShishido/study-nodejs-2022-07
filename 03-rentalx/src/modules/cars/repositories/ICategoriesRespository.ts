import { Category } from "../entities/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRespository {
  create({ name, description }: ICreateCategoryDTO): void;
  findByName(name: string): Category;
  list(): Category[];
}
export { ICategoriesRespository, ICreateCategoryDTO };
