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

export async function POST(
  req: Request,
  res: Response,
) {
    console.log("handler called");
    await ensureDbConnected()
    const { username, email, password } = await req.json();
    const admin = await Admin.findOne({ username });
    if (admin) {
      return new Response('Ok');
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
