var friends = require("../data/friends");


module.exports = function(app) {


  app.get("/api/friends", function(req, res) {
    res.json(friend);
  });

 
  app.post("/api/friends", function(req, res) {
    
    if (friends.length < 5) {
      friends.push(req.body);
      res.json(true);
    }
  });
};
app.post("/api/clear", function(req, res) {
  friends.length = 0;
  

  res.json({ ok: true });
});

