import Season from "../models/season.js";

const seasonServices = {};

// Create
seasonServices.create = async (season) => {
  try {
    const result = await Season.create(season);
    return result;
  } catch (error) {
    console.error("Error in seasonServices.create:", error.message);
    throw new Error(`Error in seasonServices.create: ${error.message}`);
  }
};

seasonServices.update = async (seasonId, season) => {
  try {
    const result = await Season.update(seasonId, season);
    return result;
  } catch (error) {
    console.error(
      `Error in seasonServices.update for id ${seasonId}:`,
      error.message
    );
    throw new Error(
      `Error in seasonServices.update for id ${seasonId}: ${error.message}`
    );
  }
};

seasonServices.listActive = async () => {
  try {
    const result = await Season.active();
    return result;
  } catch (error) {
    console.error("Error in seasonServices.listActive:", error.message);
    throw new Error(`Error in seasonServices.listActive: ${error.message}`);
  }
};

seasonServices.delete = async (seasonId) => {
  try {
    const result = await Season.delete(seasonId);
    return result;
  } catch (error) {
    console.error(
      `Error in seasonServices.delete for id ${seasonId}:`,
      error.message
    );
    throw new Error(
      `Error in seasonServices.delete for id ${seasonId}: ${error.message}`
    );
  }
};

export default seasonServices;
