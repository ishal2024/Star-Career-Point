import streamifier from "streamifier";
import cloudinary from "../config/cloudinary.config.js";

export const uploadFromBuffer = (file) => {
  return new Promise((resolve, reject) => {
    
    const mimetype = file.mimetype;

    let resourceType;

    if (
      mimetype.startsWith("image") ||
      mimetype.startsWith("video")
    ) {
      resourceType = "image";
    } else if (
      mimetype === "application/pdf" ||
      mimetype.includes("word") ||
      mimetype.includes("presentation")
    ) {
      resourceType = "raw";
    } else {
      resourceType = "raw"; // fallback
    }

    const stream = cloudinary.uploader.upload_stream(
      { resource_type: resourceType },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );

    streamifier.createReadStream(file.buffer).pipe(stream);
  });
};