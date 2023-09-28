// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Admin } from "db";
import jwt from "jsonwebtoken";
import { ensureDbConnected } from '@/lib/dbConnect';
import { NextResponse } from 'next/server';
const SECRET = "SECRET";

// type Data = {
//   token?: string;
//   message?: string;
//   name?: string;
// }

type Data = {
  username: string;
  email: string;
  password: string;
}

export async function POST(
  request: Request,
  response: Response,
) {
    console.log("handler called");
    await ensureDbConnected()
    const data: Data = await request.json(); 
    console.log("data: ", data);

    const { username, email, password } = data;
    const admin = await Admin.findOne({ username });
    if (admin) {
      // return new Response('Ok');
      return NextResponse.json({ email: " already exits" });
    } else {
        const obj = { username: username, email: email, password: password };
        const newAdmin = new Admin(obj);
        newAdmin.save();

        const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn: '1h' });
        return NextResponse.json({ 
          "message": 'Admin created successfully', "token: ": token
         })
    }    
}
