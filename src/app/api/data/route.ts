// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextResponse } from "next/server";


export async function GET(){
    const timestamp = new Date
    return NextResponse.json({name: 'John Dea', timestamp})

} 
