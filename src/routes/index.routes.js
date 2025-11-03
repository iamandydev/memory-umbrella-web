import { Router } from "express";

const router = Router();
router.get("/", (req, res) => {
    res.render("index");
});
router.get("/download", (req, res) => {
    res.render("download");
});

export default router;
