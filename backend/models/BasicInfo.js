import mongoose from "mongoose";

const BasicInfoSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
    required: true,
  },
  tagline: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  socialLinks: {
    linkedin: { type: String },
    github: { type: String },
    twitter: { type: String },
    facebook: { type: String },
    instagram: { type: String },
  },
}, { timestamps: true });

const BasicInfo = mongoose.model('BasicInfo', BasicInfoSchema);

export default BasicInfo;
