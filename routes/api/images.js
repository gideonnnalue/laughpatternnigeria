const express = require("express");
const router = express.Router();
const passport = require("passport");
const sharp = require("sharp");

// multer

const multer = require("multer");
const upload = multer({
    // dest: "events",
    limits: {
        fileSize: 3000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error("Please upload a Valid image"));
        }

        cb(undefined, true);

        // cb(new Error('File must be a PDF'))
        // cb(undefined, true)
        // cb(undefined, false)
    }
});

// Load Images model
const Images = require("../../models/Images");

// @route   GET api/images/
// @desc    Get all images
// @access  Public
router.get("/", (req, res) => {
    const errors = {};

    Images.find()
        .then(images => {
            if (!images) {
                errors.noimage = "There are no images available";
                return res.status(404).json(errors);
            }

            res.json(images);
        })
        .catch(err => res.status(404).json({ images: "There are no images" }));
});

router.get("/:imageId", (req, res) => {
    try {
        Images.findById(req.params.imageId).then(image => {
            if (!image || !image.image) {
                throw new Error();
            }

            res.set("Content-Type", "image/jpg");
            res.send(image.image);
        });
    } catch (e) {
        res.status(404).send("cant find file");
    }
});

// @route   POST api/images/add
// @desc    Post new Event
// @access  Private
router.post(
    "/add",
    passport.authenticate("jwt", { session: false }),
    upload.single("image"),
    async (req, res) => {
        const buffer = await sharp(req.file.buffer)
            .resize({ width: 250, height: 250 })
            .toBuffer();
        const image = buffer;

        const newImage = new Images({
            image
        });

        newImage
            .save()
            .then(image => res.json(image))
            .catch(err => console.log(err));
    }
);

// @route   DELETE api/images/delete/:imageId
// @desc    Delete image
// @access  Private
router.delete(
    "/delete/:imageId",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        Images.findOneAndRemove({ _id: req.params.imageId })
            .then(data => res.json({ msg: "file deleted" }))
            .catch(err => res.status(404).json({ err }));
    }
);
module.exports = router;
