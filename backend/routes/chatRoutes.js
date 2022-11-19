const express = require('express');
const { accessChat, fetchChats, createGroupChat, renameGroup, removeFromGroup, addToGroup } = require('../controllers/chatControllers');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/').post(protect, accessChat);
router.route('/').get(protect, fetchChats);
router.route('/group').post(protect, createGroupChat);
router.route('/rename').put(protect, renameGroup);
router.route('/groupadd').put(protect, removeFromGroup);
router.route('/groupremove').put(protect, addToGroup);

module.exports = router;