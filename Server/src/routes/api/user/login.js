const {User} = require('../../../model');

/** 
 * POST Request, login user
*/

module.exports = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findByCredentials(email, password);
        
        // const user = await User.findByCredentials({
        //     email: req.body.email,
        //     password: req.body.password,
        // });
        
        user.status = 'online';
        await user.save();
        res.status(200).json(user);
    } catch (e) {
        res.status(400).json(e.message)
    }
}
