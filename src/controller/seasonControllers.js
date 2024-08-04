import seasonServices from "../services/seasonServices.js";

const seasonController = {};

seasonController.create = async (req, res) => {
  const { title, active } = req.body;

  try {
    const result = await seasonServices.create({
      title,
      active,
    });
    res.status(201).json({
      message: "Season created successfully",
      status: "success",
      data: result,
    });
  } catch (error) {
    console.error("Error in seasonController.create:", error.message);
    res.status(500).json({
      message: "Error creating Season",
      status: "error",
      error: error.message,
    });
  }
};

seasonController.update = async (req, res) => {
  const { title, active } = req.body;
  const seasonId = req.params.id;

  try {
    const result = await seasonServices.update(seasonId, {
      title,
      active,
    });
    res.status(200).json({
      message: "Season updated successfully",
      status: "success",
      data: result,
    });
  } catch (error) {
    console.error(
      `Error in SeasonController.update for id ${seasonId}:`,
      error.message
    );
    res.status(500).json({
      message: `Error updating season with id ${seasonId}`,
      status: "error",
      error: error.message,
    });
  }
};

seasonController.listActive = async (req, res) => {
  try {
    const result = await seasonServices.listActive();
    res.status(200).json({
      message: "Active season records retrieved successfully",
      status: "success",
      data: result,
    });
  } catch (error) {
    console.error("Error in seasonController.listActive:", error.message);
    res.status(500).json({
      message: "Error retrieving active Season records",
      status: "error",
      error: error.message,
    });
  }
};

seasonController.delete = async (req, res) => {
  const seasonId = req.params.id;
  console.log(seasonId);
  try {
    const result = await seasonServices.delete(seasonId);
    res.status(200).json({
      message: "Season deleted successfully",
      status: "success",
    });
  } catch (error) {
    console.error(
      `Error in seasonController.delete for id ${seasonId}:`,
      error.message
    );
    res.status(500).json({
      message: `Error deleting Season with id ${seasonId}`,
      status: "error",
      error: error.message,
    });
  }
};

export default seasonController;
