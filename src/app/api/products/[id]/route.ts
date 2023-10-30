import {NextResponse, type NextRequest} from "next/server";

export async function GET(request: NextRequest, context) {
  const id = context.params.id; // '1'

  return NextResponse.json({id})
}


// import { type NextRequest } from "next/server";

// export function GET(request: NextRequest) {
//   const searchParams = request.nextUrl.searchParams;
//   const query = searchParams.get("query");
//   // query is "hello" for /api/search?query=hello
// } EXEMPLO DE CONTROLE DE BUSCA