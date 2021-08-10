const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', 
  passport.authenticate('google'),
  (req,res)=>{
    res.redirect("http://localhost:3000/surveys")
  });

  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect("http://localhost:3000/")
  });

  app.get('/current_user', (req, res) => {
    //console.log(req)
    res.send(req.user);
  });
};
