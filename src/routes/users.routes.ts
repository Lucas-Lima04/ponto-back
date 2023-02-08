import { Router } from "express";

import { authMiddleware } from "@/middlewares/auth";
//import { listUserController } from "@/modules/users/useCases/listUser";
/*import { userLoginSocialController } from "@/modules/users/useCases/loginSocialFacebook";
import { userLoginSocialGmailController } from "@/modules/users/useCases/loginSocialGmail";
import { userLoginSocialAppleController } from "@/modules/users/useCases/loginSolcialApple";
*/
import {
    createUserController,
    updateUserController,
    findCurrentUserController,
    userLoginController,
    findByEmailController,
    deleteAccountController,
    listUsersController,
} from "../modules/users/useCases";

const userRoutes = Router();

/** Public Routes */
/*
userRoutes.post("/login/facebook", (request, response, next) => {
    return userLoginSocialController.handle(request, response, next);
});
*/

userRoutes.post("/login", (request, response, next) => {
    return userLoginController.handle(request, response, next);
});

userRoutes.post("/", authMiddleware("superAdmin"), (request, response, next) => {
    return createUserController.handle(request, response, next);
});

/** User routes */
userRoutes.put("/", authMiddleware("superAdmin"), (request, response, next) => {
    return updateUserController.handle(request, response, next);
});

userRoutes.post("/delete", authMiddleware("superAdmin"), (request, response, next) => {
    return deleteAccountController.handle(request, response, next);
});

userRoutes.get("/current", authMiddleware("user", "superAdmin"), (request, response, next) => {
    return findCurrentUserController.handle(request, response, next);
});

userRoutes.get("/", authMiddleware("superAdmin"), (request, response, next) => {
    return listUsersController.handle(request, response, next);
});

userRoutes.post("/email", authMiddleware("superAdmin"), (request, response, next) => {
    return findByEmailController.handle(request, response, next);
});

/*userRoutes.get("/", authMiddleware("superAdmin"), (request, response, next) => {
    return listUserController.handle(request, response, next);
});
*/
export { userRoutes };
