import { emailSchema, nameSchema, phoneSchema, descriptionSchema } from "../../../Utils/Validation/ValidationSchemas";

export const LanguageValidationSchema = {
    // country_id: nameSchema,
    locale: nameSchema,
    // city: nameSchema,
    name: nameSchema,
}