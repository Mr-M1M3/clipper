/*
 * Project: JSON Hero
 * Author Abir SHeikh
 * Date: Feb 21, 2022
 */

// modules
const CONFIG = require('../config/config');

// handling exception that might happen
if(!(CONFIG.NICKNAME_VALIDATOR_REGEXP instanceof RegExp)){
    throw new Error('NICKNAME_VALIDATOR_REGEXP must be valid RegExp');
}

// the actual function which validates nickname;
function is_valid_nickname(nickname){
    const NICKNAME_VALIDATOR_REGEXP = CONFIG.NICKNAME_VALIDATOR_REGEXP;
    return NICKNAME_VALIDATOR_REGEXP.test(nickname);
};

// exports module
module.exports = is_valid_nickname;