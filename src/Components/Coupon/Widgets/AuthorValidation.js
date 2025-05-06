import { descriptionSchema, nameSchema } from "../../../Utils/Validation/ValidationSchemas";

export const AuthorValidation = {
    author_name: nameSchema,
    bio: descriptionSchema,
    author_image_id: nameSchema,
    country_id: nameSchema,
    state_id: nameSchema,
    city: nameSchema,
    languages : nameSchema
}
