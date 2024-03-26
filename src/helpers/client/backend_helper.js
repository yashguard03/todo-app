import * as url from "./url_helper";
import { ApiHandler } from "./api_helper";

// Todo
export const getTodo = (query) => {
  return ApiHandler.get(url.GET_TODO, query);
};
