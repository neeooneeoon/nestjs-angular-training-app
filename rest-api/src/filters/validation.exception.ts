import { BadRequestException, Catch } from "@nestjs/common";

@Catch(ValidationException)
export class ValidationException extends BadRequestException {
    constructor(public validationErrors: string[]) {
        super();
    }
}