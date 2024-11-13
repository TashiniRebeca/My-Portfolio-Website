"use server";

import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMessage = async (FormData: FormData) => {
  const name = FormData.get("name");
  const email = FormData.get("email");
  const message = FormData.get("message");

  // if (!validateString(name, 500)) {
  //   return {
  //     error: "Invalid Name",
  //   };
  // }

  if (!validateString(email, 500)) {
    return {
      error: "Invalid Sender Email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid Message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form - Portfolio <onboarding@resend.com>",
      to: "tweerasooriya032@gmail.com",
      subject: `New Message from ${name}`,
      replyTo: email,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: email,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return { data };
};
