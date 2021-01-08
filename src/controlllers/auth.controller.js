import User from '../models/User';

export const signUp = async (req, res) => {
    const { username,email,password } = req.body;
    
    const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password)
    })

    await newUser.save();
    
    res.json("signUp");
}
export const signIn = async (req, res) => {
    res.json('sigIn')
}