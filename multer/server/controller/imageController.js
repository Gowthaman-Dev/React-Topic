import Image from "../model/imageModel.js";

export const createImage = async (req, res) => {
  try {
    const { name } = req.body;

    const newData = await Image.create({
      name,
      image: req.file.path
    });

    res.status(200).json({
      msg: "✅ Image uploaded successfully",
      data: newData
    });

  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "❌ Upload failed" });
  }
};