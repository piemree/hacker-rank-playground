var recipes = require("../recipes.json");
var router = require("express").Router();

router.get("/", function (req, res) {
  const page = parseInt(req.query.page);
  let pages = [];
  switch (page) {
    case 1:
      pages = recipes.slice(page - 1, page + 2);
      break;
    case 2:
      pages = recipes.slice(page + 1, page + 4);
      break;
    case 3:
      pages = recipes.slice(page + 3, page + 6);
      break;
    default:
      pages = recipes.slice(0, 3);
      break;
  }
  const limit = parseInt(req.query.limit);
  for (let i = 0; i < 3 - limit; i++) {
    pages.pop();
  }
  res.json(pages);
});

module.exports = router;
