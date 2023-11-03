import {NextResponse} from "next/server";
import products from '@/../../db.json'
import { ProductType } from "@/services/products";

export async function GET(context:{params: { id: string; }}) {
  const id = context.params.id;
  console.log(id)
  // const product = products.find(p=>p.id === Number(id))  
  // console.log(product)
  return NextResponse.json({id})
}


// import { type NextRequest } from "next/server";

// export function GET(request: NextRequest) {
//   const searchParams = request.nextUrl.searchParams;
//   const query = searchParams.get("query");
//   // query is "hello" for /api/search?query=hello
// } EXEMPLO DE CONTROLE DE BUSCA