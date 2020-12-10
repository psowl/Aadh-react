const express = require("express");
const router = express.Router();

// include CLOUDINARY:
const uploader = require("../configs/cloudinary-setup.config");

router.post(
  "/upload",
  uploader.fields([
    {
      name: "profilePic",
    },
    {
      name: "logo",
    },
  ]),
  (req, res, next) => {
    console.log("files are: ", req.files);

    // if (req.files.length < 0) {
    //   next(new Error("No file uploaded!"));
    //   return;
    // }
    // get secure_url from the file object and save it in the
    // variable 'secure_url', but this can be any name, just make sure you remember to use the same in frontend
    res.json([req.files.profilePic[0].path, req.files.logo[0].path]); // ['https:///qsdkfjqskfjh','']
  }
);

module.exports = router;
