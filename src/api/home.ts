import axios from "../plugins/axios";
import { IHome, IResponse } from "@/types";

export default class HomeApi {
  getHome(query?: any): Promise<IResponse<IHome>> {
    return axios.get("/main-page/get", { params: query }).then((res) => {
      return res.data;
    });
  }
}
