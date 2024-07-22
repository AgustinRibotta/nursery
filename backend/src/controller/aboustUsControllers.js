import aboutUsServices from "../services/aboutUsServices.js";

const aboutUsController = {};

aboutUsController.create = async (req, res) => {
  const { title, text, active } = req.body;
  const image = req.file ? req.file.filename : null;
  try {
    const newAboutUs = await aboutUsServices.create({
      title,
      text,
      image,
      active,
    });
    res.status(201).json({
      message: "About Us created successfully",
      status: "success",
      data: newAboutUs,
    });
  } catch (error) {
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
    const updateAboutUs = await aboutUsServices.update(aboutUsId, {
      title,
      text,
      image,
      active,
    });
    res.status(200).json({
      message: "About Us update successfully",
      status: "success",
      data: updateAboutUs,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error update About Us",
      status: "error",
      error: error.message,
    });
  }
};

aboutUsController.listActive = async (req, res) => {
  try {
    const listActiveAboutUs = await aboutUsServices.listActive();
    res.status(200).json({
      message: "About Us List Active successfully",
      status: "success",
      data: listActiveAboutUs,
    });
  } catch (error) {}
};

export default aboutUsController;
