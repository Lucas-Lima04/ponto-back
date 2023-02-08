import { UserPrismaFactory } from "../../factories/implementations/UserPrismaFactory";
import { UsersPrismaRepository } from "../../repositories/implementations/UserPrismaRepository";
import { DeleteAccountController } from "./DeleteAccountController";
import { DeleteAccountUseCase } from "./DeleteAccountUseCase";

const userFactory = new UserPrismaFactory();
const usersRepository = new UsersPrismaRepository(userFactory);

const deleteAccountUseCase = new DeleteAccountUseCase(usersRepository);

const deleteAccountController = new DeleteAccountController(
    deleteAccountUseCase,
);

export { deleteAccountController };
