import express, { Request, Response } from "express";
const app = express();

app.use(express.json());
app.use(express.text());

// routers
const userRouter = express.Router();

app.use("/api/v1/users", userRouter);

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

app.post("/", (req: Request, res: Response) => {
    res.send(req.body);
});

userRouter.post("/create-user", (req: Request, res: Response) => {
    const user = req.body;
    res.json({
        status: "success",
        data: user
    });
});

export default app;
