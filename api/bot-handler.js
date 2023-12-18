/**
 *
 * @param {import('@vercel/node').VercelRequest} request
 * @param {import('@vercel/node').VercelResponse} response
 */
module.exports = function handleRequest(request, response) {
  fetch("https://livegram.io/_run/bot/6880547331:AAGMVOokNyBLtMLqsRRP3HKGp-fRFqPM5i4", {
    method: "POST",
    body: request.body,
    headers: request.headers,
  }).catch((error) => console.warn("Livegram redirect failed", error));

  console.log(request);

  response.status(200).json({
    body: request.body,
    query: request.query,
    cookies: request.cookies,
  });
};
