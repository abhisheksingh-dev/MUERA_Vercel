import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { userSessionId } = await request.json();

    if (!userSessionId) {
      return NextResponse.json({ error: 'userSessionId is required' }, { status: 400 });
    }

    const merchantId = process.env.merchant_id || "";
    const apiKey = process.env.apiKey || "";

    const response = await fetch('https://api.services.mirrorsize.com/api/sdk/configurator/product-details', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        apiKey,
        merchantId,
        userSessionId,
      }),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching configurator details:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
