import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PULIC_RESEND_API_KEY);

import { NextRequest, NextResponse } from "next/server";
import { ReactElement } from "react";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { message, name, email } = body;

  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["yakirisk@gmail.com"],
    subject: "Oppurtunity Lucas Zebre",
    react: EmailTemplate({ email, name, message }) as ReactElement,
  });

  if (error) {
    return NextResponse.json({ error }, { status: 400 });
  }

  return NextResponse.json({ data }, { status: 200 });
}
