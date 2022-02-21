/*
 * Project: JSON Hero
 * Author Abir SHeikh
 * Date: Feb 19, 2022
 */

// the actual function which validates name;
function is_valid_json(json){
    try{
        if(typeof json === 'object'){
            JSON.stringify(json)
            return true;
        }else{
            JSON.parse(json);
            return true;
        }
    }catch(error){
        return false;
    }
};

// exports module
module.exports = is_valid_json;