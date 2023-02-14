import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

// generate Ai Image from openai
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const getAiImageFromOpenAi = async (prompt) => {
  console.log(prompt, "PROMPT FOR IMAGE");
  const aiResponse = await openai.createImage({
    prompt,
    n: 1,
    size: "1024x1024",
    response_format: "b64_json",
  });
  console.log(aiResponse, "RESPONSE");
  const image = aiResponse.data.data[0].b64_json;

  console.log(image, "IMAGE GENERATED SUCCESSFULLY");
  return image;
};

// upload photo to cloudinary server
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Generate url from cloudinary
export const getPhotoUrl = async (photo) => {
  const photoUrl = await cloudinary.uploader.upload(photo);
  return photoUrl;
};
