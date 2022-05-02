import Joi from 'joi';

import { FormObject } from './FormObject';

export interface ContactFormParams {
  name: string;
  email: string;
  message: string;
}

export default new FormObject<ContactFormParams>(
  {
    name: '',
    email: '',
    message: '',
  },

  {
    name: Joi.string().required().max(256),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    message: Joi.string().max(2048).required(),
  }
);
