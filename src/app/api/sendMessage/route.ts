"use server";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    const api_key = process.env.KEY_EMAIL;
    const url = process.env.URL_SEND;

    if (!api_key || !url) {
      return NextResponse.json({ success: false, message: "API key or URL is missing!" }, { status: 400 });
    }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: api_key,
        name,
        email,
        message,
      }),
    });

    // Periksa apakah response dari API eksternal berhasil
    if (!response.ok) {
      const errorDetail = await response.text(); // Ambil detail kesalahan
      return NextResponse.json({ success: false, message: "Failed to send message", detail: errorDetail }, { status: response.status });
    }

    const result = await response.json();

    if (result.success) {
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
