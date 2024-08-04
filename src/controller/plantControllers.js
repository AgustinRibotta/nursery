import plantServices from "../services/plantServices.js";

const plantController = {};

// Create
plantController.create = async (req, res) => {
  const { name, text, season_id } = req.body;
  const image = req.file ? req.file.filename : null;
  try {
    const result = await plantServices.create({
      name,
      text,
      image,
      season_id,
    });
    res.status(201).json({
      message: "Plant created successfully",
      status: "success",
      data: result,
    });
  } catch (error) {
    console.error("Error in plantController.create:", error.message);
    res.status(500).json({
      message: "Error creating Plant",
      status: "error",
      error: error.message,
    });
  }
};

// Update
plantController.update = async (req, res) => {
  const { name, text, season_id } = req.body;
  const plantId = req.params.id;
  const image = req.file ? req.file.filename : null;

  try {
    const result = await plantServices.update(plantId, {
      name,
      text,
      image,
      season_id,
    });
    res.status(200).json({
      message: "Plant updated successfully",
      status: "success",
      data: result,
    });
  } catch (error) {
    console.error(
      `Error in plantController.update for id ${plantId}:`,
      error.message
    );
    res.status(500).json({
      message: `Error updating Plant with id ${plantId}`,
      status: "error",
      error: error.message,
    });
  }
};

// List
plantController.list = async (req, res) => {
  try {
    const result = await plantServices.list();
    res.status(200).json({
      message: "Plant records retrieved successfully",
      status: "success",
      data: result,
    });
  } catch (error) {
    console.error("Error in plantController.list:", error.message);
    res.status(500).json({
      message: "Error retrieving  Plantrecords",
      status: "error",
      error: error.message,
    });
  }
};

//  Delete
plantController.delete = async (req, res) => {
  const plantId = req.params.id;
  console.log(plantId);
  try {
    const result = await plantServices.delete(plantId);
    res.status(200).json({
      message: "lantdeleted successfully",
      status: "success",
    });
  } catch (error) {
    console.error(
      `Error in plantController.delete for id ${plantId}:`,
      error.message
    );
    res.status(500).json({
      message: `Error deleting Plantwith id ${plantId}`,
      status: "error",
      error: error.message,
    });
  }
};

export default plantController;
