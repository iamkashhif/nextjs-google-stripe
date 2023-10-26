import type { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "@/database/connection";
import {
  getUsers,
  postUsers,
} from "@/controller/users_controller";

type Data = {
  method: any;
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  connectMongo();

  const { method } = req;

  switch (method) {
    case "GET":
      getUsers(req, res);
      break;

    case "POST":
      postUsers(req, res);
      break;

    default:
      res.status(405).json({ method, name: "Method not available" });
      break;
  }
}
