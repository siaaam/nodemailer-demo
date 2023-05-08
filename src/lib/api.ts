import axios from "axios";
export const sendContactForm = async (data: any) => {
  return await axios.post("/api/contact", {
    data,
  });
};
