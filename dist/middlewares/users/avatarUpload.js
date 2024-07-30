"use strict";

var fs = require("fs");
function avatarUpload(req, res, next) {
  var multer = require("multer");
  var path = require("path");
  var up_folder = path.join(__dirname, "../../assets/userAvatars");
  var storage = multer.diskStorage({
    destination: function destination(req, file, cb) {
      if (!fs.existsSync(up_folder)) {
        fs.mkdirSync(up_folder, {
          recursive: true
        });
      }
      cb(null, up_folder);
    },
    filename: function filename(req, file, cb) {
      var uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      var ext = path.extname(file.originalname);
      cb(null, file.fieldname + "-" + uniqueSuffix + ext);
    }
  });
  var upload = multer({
    storage: storage,
    limits: {
      fileSize: 20 * 1024 * 1024
    },
    fileFilter: function fileFilter(req, file, cb) {
      if (file.mimetype === "image/jpeg" || file.mimetype === "image/jpg" || file.mimetype === "image/png") {
        cb(null, true);
      } else {
        cb(null, false);
      }
    }
  });
  upload.any()(req, res, function (err) {
    if (err) {
      res.status(500).json({
        success: false,
        message: "Error uploading file",
        error: err.message
      });
    } else {
      next();
    }
  });
}
module.exports = avatarUpload;