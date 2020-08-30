import sp500Returns from '../../../data/sp500Returns.json';

export default (req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(sp500Returns));
};
