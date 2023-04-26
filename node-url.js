const url = require('url');
const adr = 'https://docs.google.com/presentation/d/15j362wicV4cEu7pcD-MBEAfUytJtYB4baqezOOeO0SA/edit?hello=10110#slide=id.g2398c85b242_0_4?hello=2022';
//Parse the address:
const q = url.parse(adr, true);

/*The parse method returns an object containing url properties*/
console.log('host: ' + q.host);
console.log('pathname: ' + q.pathname);
console.log('search: ' + q.search);

/*The query property returns an object with all the querystring parameters as properties:*/
const qdata = q.query;
console.log(qdata);