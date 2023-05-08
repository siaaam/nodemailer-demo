import { mailOptions, transporter } from "@/config/nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const data = req.body;
    const { name, message, email } = data.data;
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: name,
        text: "this is test string",
        html: "<h1>TEST TITLE</h1><p>Some body text</p>",
      });
      return res.status(200).json({ success: true });
    } catch (error: any) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  } else {
    return res.status(404).json({ message: "Method not allowed" });
  }
};
export default handler;
