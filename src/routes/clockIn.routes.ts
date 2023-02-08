import { response, Router } from "express";

import { authMiddleware } from "@/middlewares/auth";
import {
    createClockInController,
    listClockInsController,
    updateClockInController
} from "../modules/clockIns/useCases";

import { request } from "http";


const clockInRoutes = Router();

clockInRoutes.post("/", authMiddleware("user"), (request, response, next) => {
    return createClockInController.handle(request, response, next);
});

clockInRoutes.get("/", authMiddleware("user", "superAdmin"), (request, response, next) => {
    return listClockInsController.handle(request, response, next);
});

clockInRoutes.get("/:guid", authMiddleware("superAdmin"), (request, response, next) => {
    return listClockInsController.handle(request, response, next);
});

clockInRoutes.put("/", authMiddleware("user"), (request, response, next) => {
    return updateClockInController.handle(request, response, next);
})

export { clockInRoutes };
