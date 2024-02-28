const Applicant = require("../modals/Applicant");
const bcrypt = require("bcrypt");

const applicantChangePassword = async (req, res) => {
    console.log(req , res);
    try {
        const { newpassword } = req.body;
        if (!newpassword) {
            return res.json({ success: false, msg: "Enter new password" });
        }
        const salt = await bcrypt.genSalt(10);
        const securepassword = await bcrypt.hash(newpassword, salt);

        await Applicant.findByIdAndUpdate(req.user.id, {
            password: securepassword,
        });
        return res.json({ success: true });
    } catch (error) {
        console.log(error);
        res.json({ success: false });
    }
};
module.exports = applicantChangePassword;
