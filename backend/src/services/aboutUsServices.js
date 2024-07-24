import AboutUs from "../models/us.js";

const aboutUsServices = {};

// Create
aboutUsServices.create = async (aboutUs) => {
  try {
    const result = await AboutUs.create(aboutUs);
    return result;
  } catch (error) {
    console.error("Error in aboutUsServices.create:", error.message);
    throw new Error(`Error in aboutUsServices.create: ${error.message}`);
  }
};

aboutUsServices.update = async (aboutUsId, aboutUs) => {
  try {
    const result = await AboutUs.update(aboutUsId, aboutUs);
    return result;
  } catch (error) {
    console.error(
      `Error in aboutUsServices.update for id ${aboutUsId}:`,
      error.message
    );
    throw new Error(
      `Error in aboutUsServices.update for id ${aboutUsId}: ${error.message}`
    );
  }
};

aboutUsServices.listActive = async () => {
  try {
    const result = await AboutUs.active();
    return result;
  } catch (error) {
    console.error("Error in aboutUsServices.listActive:", error.message);
    throw new Error(`Error in aboutUsServices.listActive: ${error.message}`);
  }
};

aboutUsServices.delete = async (aboutUsId) => {
  try {
    const result = await AboutUs.delete(aboutUsId);
    return result;
  } catch (error) {
    console.error(
      `Error in aboutUsServices.delete for id ${aboutUsId}:`,
      error.message
    );
    throw new Error(
      `Error in aboutUsServices.delete for id ${aboutUsId}: ${error.message}`
    );
  }
};

export default aboutUsServices;
