const Approver = require("../modals/Approver");
const bcrypt = require("bcrypt");

const approverChangePassword = async (req, res) => {
    try {
        const { newpassword } = req.body;
        if (!newpassword) {
            return res.json({ success: false, msg: "Enter new password" });
        }
        const salt = await bcrypt.genSalt(10);
        const securepassword = await bcrypt.hash(newpassword, salt);

        await Approver.findByIdAndUpdate(req.user.id, {
            password: securepassword,
        });
        return res.json({ success: true });
    } catch (error) {
        console.log(error);
        res.json({ success: false });
    }
};
module.exports = approverChangePassword;
