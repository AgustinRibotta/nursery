import AboutUs from "../models/us.js";

const aboutUsServices = {};

// Create
aboutUsServices.create = async (aboutUs) => {
  const newAboutUs = await AboutUs.create(aboutUs);
  return newAboutUs;
};

aboutUsServices.update = async (aboutUsId, aboutUs) => {
  try {
    const updateAboutUs = await AboutUs.update(aboutUsId, aboutUs);
    return updateAboutUs;
  } catch (error) {
    console.error("Error in aboutUsServices update:", error);
    throw error;
  }
};

export default aboutUsServices;
