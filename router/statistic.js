const express = require('express');
const router = express.Router();
const Components = require('../models/components');
const { join } = require('path');

router.get("/", async (req, res) => {
    try {
        const data = await Components.find({ userId: req.session.userId });

        let wing1 = 0;
        let engine1 = 0;
        let battery1 = 0;
        let wing2 = 0;
        let engine2 = 0;
        let battery2 = 0;
        let wing3 = 0;
        let engine3 = 0;
        let battery3 = 0;
        let wing4 = 0;
        let engine4 = 0;
        let battery4 = 0;
        let frame1 = 0;
        let frame2 = 0;
        let frame3 = 0;
        let frame4 = 0;
        let camera1 = 0;
        let camera2 = 0;
        let camera3 = 0;
        let camera4 = 0;
        let controller1 = 0;
        let controller2 = 0;
        let controller3 = 0;
        let controller4 = 0;

        data.forEach(component => {
            component.title.forEach(title => {
                //! Wing
                if (title.includes("wing1")) {
                    wing1++;
                }
                if (title.includes("wing2")) {
                    wing2++;
                }
                if (title.includes("wing3")) {
                    wing3++;
                }
                if (title.includes("wing4")) {
                    wing4++;
                }
                //! Engine
                if (title.includes("motor1")) {
                    engine1++;
                }
                if (title.includes("motor2")) {
                    engine2++;
                }
                if (title.includes("motor3")) {
                    engine3++;
                }
                if (title.includes("motor4")) {
                    engine4++;
                }
                //! Battery
                if (title.includes("battery1")) {
                    battery1++;
                }
                if (title.includes("battery2")) {
                    battery2++;
                }
                if (title.includes("battery3")) {
                    battery3++;
                }
                if (title.includes("battery4")) {
                    battery4++;
                }
                //! Frame
                if (title.includes("frame1")) {
                    frame1++;
                }
                if (title.includes("frame2")) {
                    frame2++;
                }
                if (title.includes("frame3")) {
                    frame3++;
                }
                if (title.includes("frame4")) {
                    frame4++;
                }
                //! Camera
                if (title.includes("camera1")) {
                    camera1++;
                }
                if (title.includes("camera2")) {
                    camera2++;
                }
                if (title.includes("camera3")) {
                    camera3++;
                }
                if (title.includes("camera4")) {
                    camera4++;
                }
                //! Controller
                if (title.includes("controller1")) {
                    controller1++;
                }
                if (title.includes("controller2")) {
                    controller2++;
                }
                if (title.includes("controller3")) {
                    controller3++;
                }
                if (title.includes("controller4")) {
                    controller4++;
                }
            });
        });

        res.render(join(__dirname, "../pages/statistic"), {
            wing1, engine1, battery1, 
            wing2, engine2, battery2, 
            wing3, engine3, battery3, 
            wing4, engine4, battery4,
            frame1, frame2, frame3, frame4,
            camera1, camera2, camera3, camera4,
            controller1, controller2, controller3, controller4
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
