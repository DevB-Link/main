import express from "express";

const router = express.Router();

router.use(express.json())

router.post("/register", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "이메일과 비밀번호를 입력하세요." });
    }

    console.log("회원가입 요청:", { email, password });

    res.json({ message: "회원가입 성공!" });
});

router.post("/", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "이메일과 비밀번호를 입력하세요." });
    }

    console.log("로그인 요청:", { email, password });

    res.json({ message: "로그인 성공!" });
});

export default router;