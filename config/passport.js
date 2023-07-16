const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

// Mock users (this should be replaced with a database)
const users = [
  {
    id: 1,
    username: 'john',
    password: '$2b$10$t7fcuZQ75hnFskVXTSDsCukg7xuLByOaO7HjTksTbubV7Nylg2oOi' // bcrypt-hashed password for 'password'
  }
];

function findUserByUsername(username) {
  return users.find(user => user.username === username);
}

function findUserById(id) {
  return users.find(user => user.id === id);
}

passport.use(new LocalStrategy((username, password, done) => {
  const user = findUserByUsername(username);

  if (!user) {
    return done(null, false, { message: 'Invalid username or password' });
  }

  bcrypt.compare(password, user.password, (err, res) => {
    if (err) {
      return done(err);
    }

    if (!res) {
      return done(null, false, { message: 'Invalid username or password' });
    }

    return done(null, user);
  });
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const user = findUserById(id);
  done(null, user);
});

module.exports = passport;

module.exports = function(passport) {
  // code for passport configuration
};
