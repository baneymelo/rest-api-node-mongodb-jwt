import config from '../config';
import User from '../models/User';
import jwt from 'jsonwebtoken';
import Role from '../models/Role';

export const verifyToken = async (req, res, next) => {
    
    try {
        const token = req.headers["x-access-token"];
       /*  console.log(token); */
        if (!token)  return res.status(403).json({ message: "No token provided" });

        const decoded = jwt.verify(token, config.SECRET);
        req.userId = decoded.id;
        /* console.log(req.userId); */

        const user = await User.findById(req.userId, { password: 0 });
        if (!user) return res.status(404).json({ message: "User not found" });
        
        next();

    }catch(error){  
        return res.status(401).json({message: 'unauthorized'})    
    }
}

export const isAdmin = async (req, res, next)=> {
    const user = await User.findById(req.userId);
    const roles = await Role.find({_id: {$in: user.roles}});
    console.log(roles[0]);
    for(let i=0; i<roles.length; i++) {
        if (roles[i].name === "admin"){
            next();
            return;
        }
    }
    return res.status(403).json({message: "requested admin role"})

}

 export const isModerator = async (req, res, next)=> {
    const user = await User.findById(req.userId);
    const roles = await Role.find({_id: {$in: user.roles}});

    for(const i=0; i<roles.length; i++) {
        if (roles[i].name === "moderator"){
            next();
            return;
        }
    }
    return res.status(403).json({message: "requested moderator role"})
}