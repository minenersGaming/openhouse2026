import { auth } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

 export async function GET(req: NextRequest) {
   const session = await auth.api.getSession({
     headers: req.headers,
   });
 
   if (!session) {
     return NextResponse.json({ok:false, reason:"unauthorized",data:null },{status:401});
   }
   //console.log(session);
   
   return NextResponse.json({ok:true, reason:"authorized",data:session },{status:200});
 } 
