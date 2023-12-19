/**
 *
 * @param {import('@vercel/node').VercelRequest} request
 * @param {import('@vercel/node').VercelResponse} response
 */
module.exports = async function handleRequest(request, response) {
  await Promise.all(
    fetch(
      "https://livegram.io/_run/bot/6880547331:AAGMVOokNyBLtMLqsRRP3HKGp-fRFqPM5i4",
      {
        method: "POST",
        body: request.body,
        headers: request.headers,
      }
    )
      .then((res) => console.log("Livegram response", res.body))
      .catch((error) => console.warn("Livegram redirect failed", error)),
    fetch(
      "https://amojo.amocrm.ru/~external/hooks/telegram?t=6880547331:AAGMVOokNyBLtMLqsRRP3HKGp-fRFqPM5i4&",
      {
        method: "POST",
        body: request.body,
        headers: request.headers,
      }
    )
      .then((res) => console.log("AMOCRM response", res.body))
      .catch((error) => console.warn("AMOCRM redirect failed", error))
  );

  console.log(request.body);

  response.status(200).json({
    body: request.body,
    query: request.query,
    cookies: request.cookies,
  });
};
