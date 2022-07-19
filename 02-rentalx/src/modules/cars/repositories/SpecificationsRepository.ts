import { Specification } from "../model/Specification";
import {
  ISpecificationsRepository,
  ICreateSpecification,
} from "./ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ name, description }: ICreateSpecification): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });
  }
  findByName(name: string): Specification {
    const specification = this.specifications.find(spec => spec.name === name);
    return specification;
  }
}

export { SpecificationsRepository };
