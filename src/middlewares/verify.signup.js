import { ROLES } from "../models/Role";
import User from "../models/User";

export const checkDuplicateUser = async (req, res, next) => {
    const user = await User.findOne({username: req.body.email});
    
    if(user) return res.status(400).json({message: "The user already exist!"})

    next();
}


export const checkRolesExists = (req, res, next) =>{
    if(req.body.roles){
        for(let i=0; i<req.body.roles.length; i++){
            if(!ROLES.includes(req.body.roles[i])){
                return res.status(404).json({message: `Rols ${req.body.roles[i]} doesnt exist`})
            } 
        }
    }

    next();
}