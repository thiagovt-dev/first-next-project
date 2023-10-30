import {NextResponse, type NextRequest} from "next/server";
import products from '@/../../db.json'
export async function GET(request: NextRequest, context:{params:any}) {
  const id = context.params.id;
  const product = products.find(p=>p.id === +id)  

  return NextResponse.json(product)
}


// import { type NextRequest } from "next/server";

// export function GET(request: NextRequest) {
//   const searchParams = request.nextUrl.searchParams;
//   const query = searchParams.get("query");
//   // query is "hello" for /api/search?query=hello
// } EXEMPLO DE CONTROLE DE BUSCA