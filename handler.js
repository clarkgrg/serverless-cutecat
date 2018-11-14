'use strict';
const { fetchCat } = require('./libs/fetch');
const { render } = require('./libs/render');

module.exports.getcat = async (event, context) => {
  const catInfo = await fetchCat();
  const html = render(catInfo);

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/html' },    
    body: html
  };
};
