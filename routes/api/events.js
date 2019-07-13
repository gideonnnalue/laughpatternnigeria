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

// Load input validators
const validateEventInput = require("../../validation/event");

// Load Event model
const Event = require("../../models/Events");

// @route   GET api/events/all
// @desc    Get all events
// @access  Public
router.get("/all", (req, res) => {
    const errors = {};

    Event.find()
        .then(events => {
            if (!events) {
                errors.noevents = "There are no events available";
                return res.status(404).json(errors);
            }

            res.json(events);
        })
        .catch(err =>
            res.status(404).json({ events: "There are no profiles" })
        );
});

router.delete("/del", (req, res) => {
    Event.remove({})
        .then(i => {
            res.json({ msg: "success" });
        })
        .catch(err => res.json(err));
});

// @route   POST api/events/event
// @desc    Post new Event
// @access  Private
router.post(
    "/event",
    passport.authenticate("jwt", { session: false }),
    upload.single("eventImage"),
    async (req, res) => {
        const { errors, isValid } = validateEventInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const buffer = await sharp(req.file.buffer)
            .resize({ width: 250, height: 250 })
            .toBuffer();

        const title = req.body.title;
        const details = req.body.details;
        const image = buffer;

        // Find if title exists
        Event.findOne({ title }).then(event => {
            // Check for user
            if (event) {
                return res.status(404).json({ event: "Event already exists" });
            }

            const newEvent = new Event({
                title,
                details,
                image
            });

            newEvent
                .save()
                .then(event => res.json({ event }))
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
    upload.single("eventImage"),
    (req, res) => {
        const { errors, isValid } = validateEventInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }
        const events = {};
        if (req.body.title) events.title = req.body.title;
        if (req.body.details) events.details = req.body.details;
        if (
            req.file.buffer ||
            req.file.buffer !== null ||
            req.file.buffer !== undefined
        )
            events.image = req.file.buffer;

        // Find if title exists
        Event.findOne({ _id: req.body.id }).then(event => {
            // Check for user
            if (!event) {
                return res.status(404).json({ event: "Event does not exists" });
            }

            Event.findOneAndUpdate({
                _id: req.body.id,
                $set: events,
                new: true
            })
                .then(event => {
                    res.json(event);
                })
                .catch(err => console.log(err));

            const newEvent = new Event({
                title,
                details,
                image
            });

            newEvent
                .save()
                .then(event => res.json({ event }))
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
    "/event/:eventId",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        Event.findOneAndRemove({ _id: req.params.eventId })
            .then(data => res.json({ msg: "success" }))
            .catch(err => console.log(err));
    }
);

router.get("/event/:eventId/image", (req, res) => {
    try {
        Event.findById(req.params.eventId).then(event => {
            if (!event || !event.image) {
                throw new Error();
            }

            res.set("Content-Type", "image/jpg");
            res.send(event.image);
        });
    } catch (e) {
        res.status(404).send("cant find file");
    }
});

router.post(
    "/upload",
    passport.authenticate("jwt", { session: false }),
    upload.single("eventImage"),
    (req, res) => {
        res.json({ msg: "working" });
    },
    (error, req, res, next) => {
        res.status(400).json({
            error: error.message
        });
    }
);

module.exports = router;
