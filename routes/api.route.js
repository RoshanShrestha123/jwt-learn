const express = require('express');
const route = express.Router();
const jwt = require('jsonwebtoken');
const AUTH = require('../module/authorization/route/auth.Route');
const USER = require('../module/user/route/user.route');

route.use('/auth',AUTH);
route.use('/user',USER);


module.exports = route;