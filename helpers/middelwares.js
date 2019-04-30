const createError = require('http-errors');

exports.isLoggedIn = () => (req, res, next) => {
  console.log('aasssssssssssssssssssssssssssssss')
  if (req.session.currentUser) {
    next();
  } else {
    console.log('not logged in')
    next(
      // createError(401)
      );
  }
};

exports.isNotLoggedIn = () => (req, res, next) => {
  if (!req.session.currentUser) {
    next();
  } else {
    next(createError(403));
  }
};

exports.validationLoggin = () => (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    next(createError(422))
  } else {
    next();
  }
}
