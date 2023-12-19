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
  const axiosInstance = new axios.Axios({
    httpAgent: httpsAgent,
  });

  const requestBody = request.body;
  console.log("🚀 ~ file: bot-handler.js:17 ~ handleRequest ~ requestBody:", requestBody, 'type: ', typeof requestBody);

  await Promise.all([
    axiosInstance.post(
      "https://livegram.io/_run/bot/6880547331:AAGMVOokNyBLtMLqsRRP3HKGp-fRFqPM5i4",
      requestBody,
      {
        headers: request.headers,
      }
    )
      .then((res) => console.log("Livegram response", res))
      .catch((error) => console.warn("Livegram redirect failed", error)),
    axiosInstance.post(
      "https://amojo.amocrm.ru/~external/hooks/telegram?t=6880547331:AAGMVOokNyBLtMLqsRRP3HKGp-fRFqPM5i4&",
      requestBody,
      {
        headers: request.headers,
      }
    )
      .then((res) => console.log("AMOCRM response", res))
      .catch((error) => console.warn("AMOCRM redirect failed", error))
    ]);

  response.status(200).json({
    body: request.body,
    query: request.query,
    cookies: request.cookies,
  });
};
