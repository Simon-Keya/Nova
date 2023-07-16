const legalController = {};

legalController.index = (req, res) => {
  res.render('legal');
};

module.exports = legalController;
