import { NextRequest, NextResponse } from "next/server";

export function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
): NextResponse {
  // GET /api/users/[id] リクエストの処理
}

// ...
// 例）GET /api/users?query=hoge のようなリクエストの場合
    //export function GET(request: NextRequest): NextResponse {
    //const params = request.nextUrl.searchParams;
    //const query = params.get("query");
  // query = "hoge"
// ...


export function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
): NextResponse {
  // PUT /api/users/[id] リクエストの処理
}

export function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
): NextResponse {
  // DELETE /api/users/[id] リクエストの処理
}
