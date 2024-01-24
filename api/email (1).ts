import type { NextRequest } from "next/server";
import { render } from "@react-email/render";
import { sendEmail } from "@/lib/email";
import ContactEmail from "@/app/email/contactEmail";

//export const runtime = "edge";
export const config = {
  runtime: "edge",
};

export default async function handler(req: NextRequest) {
  const body: any = req.json();
  const headers = new Headers();
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Access-Control-Allow-Methods", "POST,GET");
  headers.set("Access-Control-Allow-Headers", "Content-Type");
  headers.set("Access-Control-Max-Age", "86400");
  headers.set("Content-Type", "application/json");
  try {
    if (req.method === "OPTIONS") {
      return new Response(null, { headers });
    }
    if (req.method !== "POST") {
      return new Response(JSON.stringify({ message: "Method not allowed" }));
    }

    const body: any = req.body;
    const to = body.to;
    const name = body.name || "No name";
    const email = body.email || "No email";
    const message = body.message || "No message";

    const result = await sendEmail({
      to: "parmaktayfur@gmail.com", //to,
      subject: `Contact Form `,
      html: render(
        ContactEmail({
          name: name,
          email: email,
          message: message
        })
      ),
    });
    if (!result) {
      return new Response(
        JSON.stringify({ message: "Email failed to send", to: to })
      );
    }
    return new Response(
      JSON.stringify({ message: "Email sent successfully", to: to })
    );
  } catch (error) {
    console.error("Hata oluştu:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}
