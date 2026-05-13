import { NextResponse } from "next/server";
// import { supabase } from '@/lib/supabase';

// export async function GET() {
//   const { data, error } = await supabase.from('orders').select('*');

//   if (error) return NextResponse.json({ error: error.message }, { status: 500 });
//   return NextResponse.json(data);
// }

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
//     const { data, error } = await supabase.from('orders').insert(body).select();

//     if (error) return NextResponse.json({ error: error.message }, { status: 500 });
//     return NextResponse.json(data, { status: 201 });
//   } catch (err) {
//     return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
//   }
// }

export async function GET() {
  return NextResponse.json("GET request received");
}

export async function POST(request: Request) {
  return NextResponse.json("POST request received");
}
