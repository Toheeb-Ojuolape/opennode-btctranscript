const { Router } = require('express');
import { lnurlWithdrawal } from "./controllers/lnurlwithdrawController";


const router = Router();

router.post("/lnurl-withdraw",lnurlWithdrawal)

module.exports = router