import type { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "@/database/connection";
import {
  deleteUsers,
  getUser,
  postSearchUser,
  putUsers,
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
      getUser(req, res);
      break;

    case "PUT":
      putUsers(req, res);
      break;

    case "DELETE":
      deleteUsers(req, res);
      break;

    case "POST":
      postSearchUser(req, res);
      break;

    default:
      res.status(405).json({ method, name: "Method not available" });
      break;
  }
}
