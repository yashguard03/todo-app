import Joi from "joi";
import { validateResponse } from "@/helpers/server/apiResponse";

class validate {
  static createTodo = async (req, next) => {
    const { taskName } = await req;
    const schema = Joi.object({
      taskName: Joi.string().min(3).max(20).required(),
    });

    const { error } = schema.validate({ taskName });

    if (error) {
      return validateResponse({ error });
    }

    return next();
  };
}

export default validate;
