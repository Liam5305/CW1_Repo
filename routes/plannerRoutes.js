const express = require('express');
const controller = require('../controllers/plannerController');
const router = express.Router();

router.get("/", controller.landing_page);
router.get("/agenda", controller.entries_list);
router.get('/about.html', controller.about_page);
router.get('/new', controller.new_entry);
router.get('/sign_in', controller.sign_in_page);
router.get('/login', controller.login_page);
router.post('/log', controller.post_new_entry);
/**router.post('/updatedagenda', controller.update_entry);
router.post('/updatedagenda', controller.delete_entry);**/
router.get('/remove', controller.delete_entries);

module.exports = router;