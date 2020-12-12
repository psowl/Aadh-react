const express = require('express');
const router = express.Router();

// include CLOUDINARY:
const uploader = require('../configs/cloudinary-setup.config');

// pour plusieurs photos 
// router.post(
//    '/upload',
//    uploader.fields([
//       {
//          name: 'profilePic',
//       },
//       {
//          name: 'logo',
//       },
//    ]),
//    (req, res, next) => {
//       console.log('files are: ', req.files.profilePic);
//       console.log('files are: ', req.files.logo);

//       if (req.files.length < 2) {
//         next(new Error("No file uploaded!"));
//         return;
//       }
//       // get secure_url from the file object and save it in the
//       // variable 'secure_url', but this can be any name, just make sure you remember to use the same in frontend
//       res.json([req.files.profilePic[0].path, req.files.logo[0].path]); // ['https:///qsdkfjqskfjh','']
//    }
// );

//prendre images dans le front et l'envoyer dans cloudinary
router.post('/upload', uploader.single('imageUrl'), (req, res, next) => {
   // console.log('file is: ', req.file)

   if (!req.file) {
      next(new Error('No file uploaded!'));
      return;
   }
  
   res.json({ secure_url: req.file.path });//secure_url est une clé par défaut de response de la route upload
});

module.exports = router;
