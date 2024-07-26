import aboutUsServices from "../services/aboutUsServices.js";

const aboutUsController = {};

aboutUsController.create = async (req, res) => {
  const { title, text, active } = req.body;
  const image = req.file ? req.file.filename : null;
  try {
    const result = await aboutUsServices.create({
      title,
      text,
      image,
      active,
    });
    res.status(201).json({
      message: "About Us created successfully",
      status: "success",
      data: result,
    });
  } catch (error) {
    console.error("Error in aboutUsController.create:", error.message);
    res.status(500).json({
      message: "Error creating About Us",
      status: "error",
      error: error.message,
    });
  }
};

aboutUsController.update = async (req, res) => {
  const { title, text, active } = req.body;
  const aboutUsId = req.params.id;
  const image = req.file ? req.file.filename : null;

  try {
    const result = await aboutUsServices.update(aboutUsId, {
      title,
      text,
      image,
      active,
    });
    res.status(200).json({
      message: "About Us updated successfully",
      status: "success",
      data: result,
    });
  } catch (error) {
    console.error(
      `Error in aboutUsController.update for id ${aboutUsId}:`,
      error.message
    );
    res.status(500).json({
      message: `Error updating About Us with id ${aboutUsId}`,
      status: "error",
      error: error.message,
    });
  }
};

aboutUsController.listActive = async (req, res) => {
  try {
    const result = await aboutUsServices.listActive();
    res.status(200).json({
      message: "Active About Us records retrieved successfully",
      status: "success",
      data: result,
    });
  } catch (error) {
    console.error("Error in aboutUsController.listActive:", error.message);
    res.status(500).json({
      message: "Error retrieving active About Us records",
      status: "error",
      error: error.message,
    });
  }
};

aboutUsController.delete = async (req, res) => {
  const aboutUsId = req.params.id;
  console.log(aboutUsId);
  try {
    const result = await aboutUsServices.delete(aboutUsId);
    res.status(200).json({
      message: "About Us deleted successfully",
      status: "success",
    });
  } catch (error) {
    console.error(
      `Error in aboutUsController.delete for id ${aboutUsId}:`,
      error.message
    );
    res.status(500).json({
      message: `Error deleting About Us with id ${aboutUsId}`,
      status: "error",
      error: error.message,
    });
  }
};

export default aboutUsController;
