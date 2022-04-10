const db = require('../database/connect');

async function getInfos(){
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM user_status', (error, result) => {
            if(error) reject(error);
            // console.log('model request:' + JSON.stringify(result));
            resolve(result);
        });
        // db.end();
    })
}

async function showData(){
    let outData = await getInfos();
    // console.log('outData'+ JSON.stringify(outData));
    return outData;
}

module.exports = {
    showData,
}
