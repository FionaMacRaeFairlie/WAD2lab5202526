import express from "express";
import * as controller from "../controllers/guestbookControllers.js";

const router = express.Router();

router.get("/", controller.static_landing_page);
// router.get('/guestbook', function (req, res) {
//   res.send('<h1>Guestbook Messages</h1>');
// })
router.get('/guestbook', controller.entries_list);
router.get("/new", controller.show_new_entries);
router.get("/login", controller.show_login);
router.get("/register", controller.show_register_page);

// 404 handler
router.use(function (req, res) {
  res.status(404);
  res.type('text/plain');
  res.send('404 Not found.');
})

// Generic error handler
router.use(function (err, req, res, next) {
  res.status(500);
  res.type('text/plain');
  res.send('Internal Server Error.');
})

export default router;
