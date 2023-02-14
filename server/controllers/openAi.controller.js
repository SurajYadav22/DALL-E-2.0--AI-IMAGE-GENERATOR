import { getAiImageFromOpenAi } from "../utils/index.js";

// Create Ai Image
export const createAiImage = async (req, res) => {
  try {
    const { prompt } = req.body;
    // console.log(req.body, " body ");

    const image = await getAiImageFromOpenAi(prompt);
    // console.log(image, "image generated");
    res.status(200).json({ success: true, photo: image });
  } catch (error) {
    res
      .status(500)
      .send({ success: false, error: error.message, message: "error" });
  }
};
