import { NextResponse } from "next/server";

// get request to take input from the query parameters
export async function GET(request: Request) {
  const {searchParams} = new URL(request.url)

  // const name = searchParams.get('name')
  // const instrument = searchParams.get('instrument')

  const obj = Object.fromEntries(searchParams.entries())

  // return NextResponse.json({ name, instrument });
  return NextResponse.json(obj);
}
