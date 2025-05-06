import { descriptionSchema, nameSchema } from "../../../Utils/Validation/ValidationSchemas";

export const PublicationValidation = {
    publisher_name: nameSchema,
    description: descriptionSchema,
    publisher_logo_id: nameSchema,
    country_id: nameSchema,
    state_id: nameSchema,
    city: nameSchema,
}
