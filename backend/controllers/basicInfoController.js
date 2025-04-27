import BasicInfo from "../models/BasicInfo.js";

// Create new Basic Info
export const createBasicInfo = async (req, res) => {
  try {
    const basicInfo = new BasicInfo(req.body);
    await basicInfo.save();
    res.status(201).json(basicInfo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Basic Info
export const getBasicInfo = async (req, res) => {
  try {
    const basicInfo = await BasicInfo.findOne();
    res.status(200).json(basicInfo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Basic Info
export const updateBasicInfo = async (req, res) => {
  try {
    const basicInfo = await BasicInfo.findOneAndUpdate({}, req.body, { new: true });
    res.status(200).json(basicInfo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Basic Info (optional)
export const deleteBasicInfo = async (req, res) => {
  try {
    await BasicInfo.deleteMany();
    res.status(200).json({ message: "All basic info deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
