export const sortData = (data, order = 'ascending') =>
	data &&
	[...data].sort(order === 'descending' ? (a, b) => (a.year < b.year ? 1 : -1) : (a, b) => (a.year < b.year ? -1 : 1));

export const cumulativeReturn = (
	data = { year: 0, totalReturn: '0.00' },
	startYear = 1926,
	endYear = new Date().getFullYear() - 1
) =>
	data &&
	[...data]
		.filter(({ year }) => year >= startYear && year <= endYear)
		.reduce((cumulativeReturn, { totalReturn }) => cumulativeReturn + +totalReturn, 0)
		.toFixed(2);
