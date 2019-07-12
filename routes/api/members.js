const express = require("express");
const router = express.Router();
const passport = require("passport");

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

// Load input validators
const validateMemberInput = require("../../validation/member");

// Load Event model
const Member = require("../../models/Members");

// @route   GET api/events/all
// @desc    Get all events
// @access  Public
router.get("/all", (req, res) => {
    const errors = {};

    Member.find()
        .then(members => {
            if (!members) {
                errors.nomembers = "There are no members available";
                return res.status(404).json(errors);
            }

            res.json(members);
        })
        .catch(err =>
            res.status(404).json({ members: "There are no members" })
        );
});

router.delete("/del", (req, res) => {
    Member.remove({})
        .then(i => {
            res.json({ msg: "success" });
        })
        .catch(err => res.json(err));
});

// @route   POST api/events/event
// @desc    Post new Event
// @access  Private
router.post(
    "/member",
    passport.authenticate("jwt", { session: false }),
    upload.single("memberImage"),
    (req, res) => {
        const { errors, isValid } = validateMemberInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const name = req.body.name;
        const job = req.body.job;
        const desc = req.body.desc;
        const image = req.file.buffer;

        // Find if title exists
        Member.findOne({ name }).then(member => {
            // Check for user
            if (member) {
                return res
                    .status(404)
                    .json({ member: "Member already exists" });
            }

            const newMember = new Member({
                name,
                job,
                desc,
                image
            });

            newMember
                .save()
                .then(member => res.json({ member }))
                .catch(err => console.log(err));
        });
    },
    (error, req, res, next) => {
        res.status(400).json({
            error: error.message
        });
    }
);

// @route   POST api/events/event
// @desc    Post new Event
// @access  Private
router.post(
    "/edit",
    passport.authenticate("jwt", { session: false }),
    upload.single("memberImage"),
    (req, res) => {
        const { errors, isValid } = validateMemberInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }
        const member = {};
        if (req.body.name) member.name = req.body.name;
        if (req.body.job) member.job = req.body.job;
        if (req.body.desc) member.desc = req.body.desc;
        if (req.body.details) member.details = req.body.details;
        if (
            req.file.buffer ||
            req.file.buffer !== null ||
            req.file.buffer !== undefined
        ) {
            member.image = req.file.buffer;
        }

        // Find if title exists
        Member.findOne({ _id: req.body.id }).then(member => {
            // Check for user
            if (!member) {
                return res
                    .status(404)
                    .json({ member: "Member does not exists" });
            }

            Event.findOneAndUpdate({
                _id: req.body.id,
                $set: member,
                new: true
            })
                .then(member => {
                    res.json(member);
                })
                .catch(err => console.log(err));

            const newMember = new newMember({
                name,
                job,
                desc,
                details
            });

            newMember
                .save()
                .then(member => res.json({ member }))
                .catch(err => console.log(err));
        });
    },
    (error, req, res, next) => {
        res.status(400).json({
            error: error.message
        });
    }
);

// @route   DELETE api/events/event/:eventId
// @desc    Delete Event
// @access  Private
router.delete(
    "/member/:memberId",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        Member.findOneAndRemove({ _id: req.params.memberId })
            .then(data => res.json({ msg: "success" }))
            .catch(err => console.log(err));
    }
);

router.get("/member/:memberId/image", (req, res) => {
    try {
        Member.findById(req.params.memberId).then(member => {
            if (!member || !member.image) {
                throw new Error();
            }

            res.set("Content-Type", "image/jpg");
            res.send(member.image);
        });
    } catch (e) {
        res.status(404).send("cant find file");
    }
});

// router.post(
//     "/upload",
//     passport.authenticate("jwt", { session: false }),
//     upload.single("eventImage"),
//     (req, res) => {
//         res.json({ msg: "working" });
//     },
//     (error, req, res, next) => {
//         res.status(400).json({
//             error: error.message
//         });
//     }
// );

module.exports = router;
