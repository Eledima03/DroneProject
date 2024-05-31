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

        data.forEach(component => {
            component.title.forEach(title => {


                //!1
                if (title.includes("wing1")) {
                    wing1++;
                }
                if (title.includes("battery1")) {
                    battery1++;
                }
                if (title.includes("motor1")) {
                    engine1++;
                }
                //! 2
                if (title.includes("wing2")) {
                    wing2++;
                }
                if (title.includes("battery2")) {
                    battery2++;
                }
                if (title.includes("motor2")) {
                    engine2++;
                }
                //!3
                if (title.includes("wing3")) {
                    wing3++;
                }
                if (title.includes("battery3")) {
                    battery3++;
                }
                if (title.includes("motor3")) {
                    engine3++;
                }

                //! 4
                if (title.includes("wing4")) {
                    wing4++;
                }
                if (title.includes("battery4")) {
                    battery4++;
                }
                if (title.includes("motor4")) {
                    engine4++;
                }
            });
        });

      

        res.render(join(__dirname, "../pages/statistic"), { wing1, engine1, battery1, 
            wing2, engine2, battery2, 
            wing3, engine3, battery3, 
            wing4, engine4, battery4, });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
