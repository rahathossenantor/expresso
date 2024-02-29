"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.text());
// routers
const userRouter = express_1.default.Router();
app.use("/api/v1/users", userRouter);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.post("/", (req, res) => {
    res.send(req.body);
});
userRouter.post("/create-user", (req, res) => {
    const user = req.body;
    res.json({
        status: "success",
        data: user
    });
});
exports.default = app;
