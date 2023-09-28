import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  token: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  
  res.status(200).json({ name: 'John Doe' })
} 