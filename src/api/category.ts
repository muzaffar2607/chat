import type { ICategory } from "@/types/category";
import { categories } from "@/data/category";

export default class CategoryApi {
  getAll(query?: any): Promise<ICategory[]> {
    return new Promise((resolve, reject) => {
      resolve(categories);
      return;
    });
  }

  getById(id: string): Promise<ICategory> {
    return new Promise((resolve, reject) => {
      const res = categories.find((el) => el._id === id);
      if (res) resolve(res);
      else reject();
      return;
    });
  }
}
