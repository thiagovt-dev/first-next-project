import { NextResponse } from "next/server"

export async function GET(context){
    const id = context.params.id
    console.log(id)
    return NextResponse.json({id})
}