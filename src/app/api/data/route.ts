// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextResponse } from "next/server";

type Data = {
  name: string;
  timestamp: Date;
};

export async function GET(request: Data){
    const timestamp = new Date
    return NextResponse.json({name: 'John Dea', timestamp})

} 
