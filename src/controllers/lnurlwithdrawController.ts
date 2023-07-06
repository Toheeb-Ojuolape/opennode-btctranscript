require("dotenv").config()
import { Request, Response } from "express-serve-static-core";
const opennode = require("opennode");
opennode.setCredentials(process.env.OPENNODE_API_KEY, process.env.OPENNODE_API_ENV);

interface OpenNodeResponse {
  id: string;
  min_amt: number;
  max_amt: number;
  description: string;
  callback_url: string;
  external_id: string;
  uri: string;
  lnurl: string;
  created_at: string;
  expiry_date: string;
  used: boolean;
}

export const lnurlWithdrawal = async (req: Request, res: Response) => {
  const { amount } = req.body;


  if(typeof(amount) != "number"){
    res.status(400).json({"message":"You need to enter a valid amount"})
    return
  }

  //all the logic to confirm if a user's virtual wallet balance is sufficient before generating LNURLwithdraw



  const withdrawal = {
    min_amt: amount,
    max_amt: amount,
    description: "payout of " + amount + " sats from BTC-transcript",
    external_id: "my-external-uuid",
    callback_url: "https://example.com/webhook/opennode",
  };

  opennode
    .createLnUrlWithdrawal(withdrawal)
    .then((response: OpenNodeResponse) => {
      res.status(200).json(response);
      return
    })
    .catch((error: any) => {
      res.status(400).json(error)
      return
    });
};
