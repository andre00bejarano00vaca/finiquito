import { NextResponse } from "next/server";
export function middleware(request){
  const jwt = request.cookies.get('auth')
    if((request.nextUrl.pathname === '/')){
      if(jwt === undefined){
         return NextResponse.redirect(new URL('/con', request.url))
      }
    }
return NextResponse.next();
}