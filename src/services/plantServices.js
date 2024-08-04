import Plant from "../models/plant.js";

const plantServices = {};

// Create
plantServices.create = async (plant) => {
  try {
    const result = await Plant.create(plant);
    return result;
  } catch (error) {
    console.error("Error in plantServices.create:", error.message);
    throw new Error(`Error in plantServices.create: ${error.message}`);
  }
};

// Update
plantServices.update = async (plantId, plant) => {
  try {
    const result = await Plant.update(plantId, plant);
    return result;
  } catch (error) {
    console.error(
      `Error in plantServices.update for id ${plantId}:`,
      error.message
    );
    throw new Error(
      `Error in plantServices.update for id ${plantId}: ${error.message}`
    );
  }
};

// List
plantServices.list = async () => {
  try {
    const result = await Plant.list();
    return result;
  } catch (error) {
    console.error("Error in plantServices.list:", error.message);
    throw new Error(`Error in plantServices.list: ${error.message}`);
  }
};

// Delete
plantServices.delete = async (plantId) => {
  try {
    const result = await Plant.delete(plantId);
    return result;
  } catch (error) {
    console.error(
      `Error in plantServices.delete for id ${plantId}:`,
      error.message
    );
    throw new Error(
      `Error in plantServices.delete for id ${plantId}: ${error.message}`
    );
  }
};

export default plantServices;
