"use strict"

import ZEC from "./libs/zec";
import User from "./modules/user";
import AJAX from "./libs/ajax";

window.zec = new ZEC(true);
zec.import('user', User);
zec.extends('ajax', AJAX);