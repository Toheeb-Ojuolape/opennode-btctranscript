const { Router } = require('express');
import { lninvoiceWithdrawal } from "./controllers/lninvoiceWithdrawController";
import { lnurlWithdrawal } from "./controllers/lnurlwithdrawController";


const router = Router();

router.post("/lnurl-withdraw",lnurlWithdrawal)
router.post("/invoice-withdraw",lninvoiceWithdrawal)

module.exports = router