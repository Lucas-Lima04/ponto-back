import { generate } from "generate-password";

import { IPasswordGenerator } from "../IPasswordGenerator";

export class GeneratePassword implements IPasswordGenerator {
    generate(): string {
        return generate({
            length: 10,
            numbers: true,
        });
    }
}
