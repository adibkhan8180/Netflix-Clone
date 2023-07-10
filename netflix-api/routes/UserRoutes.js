const {
    addToLikedMovies,
    getLikedMovies,
    removeFromLikedMovies,
  } = require("../controllers/UserControllers");
  
  const router = require("express").Router();
  
  router.get("/liked/:email", getLikedMovies);
  router.put("/delete", removeFromLikedMovies);
  router.post("/add", addToLikedMovies);
  
  module.exports = router;
  