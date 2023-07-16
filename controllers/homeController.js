const homeController = {};

homeController.index = (req, res) => {
  res.render('home');
};

module.exports = homeController;
