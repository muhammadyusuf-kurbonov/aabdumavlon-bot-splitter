const https = require('https');
const axios = require('axios');
/**
 *
 * @param {import('@vercel/node').VercelRequest} request
 * @param {import('@vercel/node').VercelResponse} response
 */
module.exports = async function handleRequest(request, response) {
  const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  });
  const axiosInstance = axios.create({
    httpAgent: httpsAgent,
  });

  const requestBody = request.body;

  await Promise.all([
    axiosInstance.post(
      "https://livegram.io/_run/bot/6880547331:AAGMVOokNyBLtMLqsRRP3HKGp-fRFqPM5i4",
      requestBody,
    )
      .then((res) => console.log("Livegram response", res.statusText))
      .catch((error) => console.log("Livegram error", error.message)),
    axiosInstance.post(
      "https://amojo.amocrm.ru/~external/hooks/telegram?t=6880547331:AAGMVOokNyBLtMLqsRRP3HKGp-fRFqPM5i4&",
      requestBody,
    )
      .then((res) => console.log("AMOCRM response", res.statusText))
      .catch((error) => console.log("AMOCRM error", error.message))
    ]);

  response.status(200).json({
    body: request.body,
    query: request.query,
    cookies: request.cookies,
  });
};
