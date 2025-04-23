var express = require("express");
var router = express.Router();

router.get("/movies", (req, res) => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.KEYAPI}`
        }
      };

  fetch("https://api.themoviedb.org/3/discover/movie",options)
    .then((reponse) => reponse.json())
    .then((data) => {
      console.log(data);
      res.json({movies:data.results});
    });
});

module.exports = router;
