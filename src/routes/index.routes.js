import { Router } from "express";

const router = Router();
router.get("/", (req, res) => {
    res.render("index");
});
router.get("/productos", (req, res) => {
    res.render("products-list");
});
router.get("/download", (req, res) => {
    res.render("download");
});
router.get("/Error", (req, res) => {
    res.render("error");
});

export default router;
