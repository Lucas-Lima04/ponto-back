import { UserPrismaFactory } from "../../factories/implementations/UserPrismaFactory";
import { UsersPrismaRepository } from "../../repositories/implementations/UserPrismaRepository";
import { ListUsersController } from "./ListUsersController";
import { ListUsersUseCase } from "./ListUsersUseCase";

const userFactory = new UserPrismaFactory();
const usersRepository = new UsersPrismaRepository(userFactory);

const listUsersUseCase = new ListUsersUseCase(usersRepository);

const listUsersController = new ListUsersController(
    listUsersUseCase,
);

export { listUsersController };
