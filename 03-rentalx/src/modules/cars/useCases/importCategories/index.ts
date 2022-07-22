import { CategoriesRepository } from "../../repositories/implementations/CategoryRepository";
import { ImportCategoriesController } from "./ImportCategoriesController";
import { ImportCategoriesUseCase } from "./ImportCategoriesUseCase";

const categoriesRepository = CategoriesRepository.getInstance();

const importCategoryUseCase = new ImportCategoriesUseCase(categoriesRepository);

const importCategoriesController = new ImportCategoriesController(
  importCategoryUseCase,
);

export { importCategoriesController };
