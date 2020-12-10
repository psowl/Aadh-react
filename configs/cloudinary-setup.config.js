const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.cloudName,
  api_key: process.env.cloudKey,
  api_secret: process.env.cloudSecret,
});

const storage = new CloudinaryStorage({
  cloudinary,
  //dans la V2 cloudinary il faut mettre params avec le folder et allowedFormats
  params: {
    folder: "aadh",
    allowedFormats: ["jpg", "png"],
  },
});

module.exports = multer({ storage });
