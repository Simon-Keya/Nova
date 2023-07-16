const aboutController = {};

aboutController.index = (req, res) => {
  res.render('about');
};

module.exports = aboutController;
