const accountController = {};

accountController.index = (req, res) => {
  res.render('account');
};

module.exports = accountController;
