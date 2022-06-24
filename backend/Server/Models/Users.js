const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const Schema = mongoose.Schema;


// Users schema 
const UsersSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    fname: {
        type: String,
        required: true,
        min: 2,
        max: 25
    },
    lname: {
        type: String,
        required: true,
        min: 2,
        max: 25
    },
    username: {
        type: String,
        required: true,
        unique: true,
        min: 5,
        max: 25
    },
    email: {
        type: String,
        required: true,
        trim: false,
        unique: true,
        min: 6,
        max: 45,
    },
    photo: {
        type: String,
        required: false,
        trim: false,
    },
    membership: {
        type: Date
    },
    login: {
        type: Date
    },
    password: {
        type: String,
        required: true,
        minimum: 6,
        max: 255      // max 255 because we may later decide to encrypt the password
    },
   
}, { timestamps: true });

UsersSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};

const Users = mongoose.model("Users", UsersSchema);


const validate2 = (data) => {
	const schema = Joi.object({
		fname: Joi.string().min(2).required().label("First Name"),
        lname: Joi.string().min(2).required().label("Last Name"),
        username: Joi.string().min(5).required().label("Username"),
		email: Joi.string().email().required().label("Email"),
		photo: Joi.string().label("Photo"),
        membership: Joi.number().max(100).required().label("Member Since"),
		password: passwordComplexity().required().label("Password"),
        login: Joi.string().required().label("Last Login"),
	});
	return schema.validate(data);
};

module.exports = { Users, validate2 };