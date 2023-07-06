require("dotenv").config();
import { Request, Response } from "express-serve-static-core";
const opennode = require("opennode");
opennode.setCredentials(
  process.env.OPENNODE_API_KEY,
  process.env.OPENNODE_API_ENV
);

interface WithdrawalResponse {
  id: string;
  type: string;
  amount: number;
  reference: string;
  fee: number;
  status: string;
  processed_at: number;
}

export const lninvoiceWithdrawal = async (req: Request, res: Response) => {
  const { invoice } = req.body;

  if(invoice ===""){
    return res.status(400).json({message:"Please enter a valid invoice"})
  }

  const withdrawal = {
    type: "ln",
    address: invoice,
    //amount: 120, - Required if the invoice has no amount set (amount = 0)
    callback_url: "https://example.com/webhook/opennode/withdrawal",
  };

  opennode
    .initiateWithdrawalAsync(withdrawal)
    .then((withdrawal: WithdrawalResponse) => {
      res.status(200).json(withdrawal);
      return;
    })
    .catch((error: any) => {
      res.status(400).json(error);
      return;
    });
};
