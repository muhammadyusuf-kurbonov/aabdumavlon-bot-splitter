module.exports = function handleRequest(request, response) {
  // fetch({
  //   method: 'POST',
  //   url: 'https://livegram.io/_run/bot/6880547331:AAGMVOokNyBLtMLqsRRP3HKGp-fRFqPM5i4',
  //   body: request.body,
  //   headers: request.headers
  // });

  console.log(JSON.stringify(request));

  response.status(200).json({
    body: request.body,
    query: request.query,
    cookies: request.cookies,
  });
};
