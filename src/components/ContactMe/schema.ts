import * as yup from "yup";
// Name
// Email
// Subject
// Message
export const schema = yup
  .object({
    Name: yup.string().required(),
    Email: yup.string().email().required(),
    Subject: yup.string().required(),
    Message: yup.string().required(),
  })
  .required();
