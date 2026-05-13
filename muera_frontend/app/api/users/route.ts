import { NextResponse } from "next/server";
// import { supabase } from '@/lib/supabase';

// export async function GET() {
//   const { data, error } = await supabase.from('users').select('*');

//   if (error) return NextResponse.json({ error: error.message }, { status: 500 });
//   return NextResponse.json(data);
// }

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();

//     // For proper auth, use supabase.auth.signUp() on the client side.
//     // This is for custom user profiles or admin creation.
//     const { data, error } = await supabase.from('users').insert(body).select();

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
