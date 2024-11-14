import Joi from "joi";

export const exampleValidation = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
});
