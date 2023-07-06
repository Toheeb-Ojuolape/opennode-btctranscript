import { Request,Response,NextFunction } from "express-serve-static-core";

export default function validateRequest(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err) {
    return res
      .status(400)
      .json({
          message:
            "Invalid request. Please check that your request does not contain invalid characters",
        });
  }
  next();
}
