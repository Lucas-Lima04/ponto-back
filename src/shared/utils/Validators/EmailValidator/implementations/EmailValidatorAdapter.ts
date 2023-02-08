import validator from "validator";

import { IEmailValidatorAdapter } from "../IEmailValidatorAdapter";

export class EmailValidatorAdapter implements IEmailValidatorAdapter {
    isValid(email: string): boolean {
        return validator.isEmail(email);
    }
}
