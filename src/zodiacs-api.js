const axios = require('axios');

async function startBattle(characterId){
    try {
    console.log(`carId: ${characterId}`);
    const options = {
        method: 'POST',
        url: "https://crypto-aliens-prod-api-1666a0b26ea8.herokuapp.com/api/battle",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Accept-Encoding": "gzip, deflate, br, zstd",
            "Accept-Language": "en-US,en;q=0.9",
            "Authorization": '{"address":"0x115A1ce7AAA695235F10091fF42c0C2aCAB2Ec67","signature":"0xd9b18e60aa26cbe69b7dac604f46eddf6d98b05d621eb5eebcbf3699a16b721739df0d047a5e5260f8364785e6870908d22a56b9d4c70dcc79ba1f46c41aab9d1c"}',
            "Connection": "keep-alive",
            "Content-Length": "80",
            "Content-Type": "application/json",
            "Host": "crypto-aliens-prod-api-1666a0b26ea8.herokuapp.com",
            "Origin": "https://play.cryptoaliens.org",
            "Referer": "https://play.cryptoaliens.org/",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "cross-site",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
            "sec-ch-ua": '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"Windows"'
          },
        data: {
            characterId: characterId,
            monsterId: '6576f90f1a86abc19fd4a399', //50% chance
            time: new Date().getTime(),
        }
    };

    const result = await axios.request(options)
    console.log(result.data.data.battle)
    return true;
    }
    catch (err) {
        console.log(err.response.data);
        return false;
    }

}
async function claimReward(carId){
    try {
    const options = {
        method: 'POST',
        url: "https://prfnbjckmlbo.usemoralis.com:2053/server/functions/battlefield_claimReward",
        headers: {
            'Content-Type': 'application/json',
            'authority': 'https://8za04rmw3eb0.grandmoralis.com:2053',
            'user-agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4692.71 Safari/537.36' 
        },
        data: {
            userCarId: carId,
            _ApplicationId: `${process.env.ApplicationId}`,
            _ClientVersion: `${process.env.ClientVersion}`,
            _InstallationId: `${process.env.InstallationId}`,
            _SessionToken: `${process.env.SessionToken}`
        }
    };

    const result = await axios.request(options)
    return result.data.result.result;
    }
    catch (err) {
        console.log(err.response.data);
        return false;
    }

}


module.exports = {
    startBattle,
}
