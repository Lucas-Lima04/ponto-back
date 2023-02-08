import { envs } from "@/shared/envs";
import { BcryptAdapter } from "@/shared/infra/adapters/cryptography/implementations/BcryptAdapter";

import { UserPrismaFactory } from "../../factories/implementations/UserPrismaFactory";
import { UsersPrismaRepository } from "../../repositories/implementations/UserPrismaRepository";
import { UserLoginUseCase } from "../login/UserLoginUseCase";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const userFactory = new UserPrismaFactory();
const usersRepository = new UsersPrismaRepository(userFactory);

const encrypter = new BcryptAdapter(Number(envs.salt));

const createUserUseCase = new CreateUserUseCase(
    usersRepository,
    encrypter
);

const createUserController = new CreateUserController(
    createUserUseCase,
);

export { createUserController };
