const express = require("express");
const router = express.Router();
const pagesRouter = require("./pages");

router.use(pagesRouter);

module.exports = router;
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;
