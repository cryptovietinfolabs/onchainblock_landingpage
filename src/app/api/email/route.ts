import { NextResponse } from "next/server";
import { Resend } from "resend";

import ContactEmail from "@/emails/contact";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: Request): Promise<NextResponse> {
  const data = await req.json();
  const { email, name, message } = data;
  await resend.emails.send({
    from: "OnchainBlock Support Department. <onboarding@resend.dev>",
    to: ["contact@onchainblock.xyz"],
    subject: "Contact",
    react: ContactEmail({
      authorMail: email,
      authorName: name,
      message,
    }),
  });

  return NextResponse.json({
    status: "Ok",
  });
}
