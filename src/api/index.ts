import CategoryApi from "./category";
import HomeApi from "./home";

export const $api = {
  home: new HomeApi(),
  category: new CategoryApi(),
};
