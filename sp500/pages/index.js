import { useState } from 'react';
import Head from 'next/head';
import { Container, Row, Col, Table } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import axios from 'axios';
import { useQuery } from 'react-query';
import { Range } from 'rc-slider';

const getSp500Returns = async (key, q) => {
	const { data } = await axios.get(`api/sp500/returns`);
	return data;
};

export default function Home() {
	const [query, setQuery] = useState('');
	const { data } = useQuery(['q', query], getSp500Returns);

	const minRange = data && data[data.length - 1].year;
	const maxRange = data && data[0].year;
	const defaultRange = [1926, 2019];
	const [range, setRange] = useState(defaultRange);

	return (
		<div>
			<Head>
				<title>S&P 500 Total Returns by Year Since 1926</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<NavBar />
				<Container className='mt-4' style={{ height: 'auto !important' }}>
					<Row>
						<Col>
							<div className='mb-4'>
								<h3 className='text-center'>S&P Total Returns</h3>
								<p>
									The total returns of the S&P 500 index are listed by year. Total returns include two components: the
									return generated by dividends and the return generated by price changes in the index. While most
									individuals focus only on the price returns of the index, dividends play an important factor in
									overall investment returns.
								</p>
							</div>
						</Col>
					</Row>
					<Row>
						<Col>
							<div className='mb-4'>
								<h5 className='text-center'>S&P Total Returns by Year</h5>
								<Row>
									<Col>
										<h6 className='text-center'>Start Year {range[0]}</h6>
									</Col>
									<Col md={8} xs={12}>
										<div className='pt-4 pb-4'>
											<Range
												allowCross={false}
												pushable={1}
												min={minRange}
												max={maxRange}
												value={range}
												onChange={e => (console.log(range), setRange(e))}
											/>
										</div>
									</Col>
									<Col>
										<h6 className='text-center'>End Year {range[1]}</h6>
									</Col>
								</Row>
								<div>
									<Table hover>
										<thead>
											<tr>
												<th scope='col'>Year</th>
												<th scope='col'>Total Return</th>
												<th scope='col'>Cumulative Return</th>
											</tr>
										</thead>
										<tbody>
											{data &&
												data
													.slice(0)
													.reverse()
													.map(
														({ year, totalReturn }, key) =>
															year >= range[0] &&
															year <= range[1] && (
																<tr key={key}>
																	<td>{year}</td>
																	<td>{totalReturn}</td>
																	<td>
																		{(currentYear =>
																			data
																				.slice(0)
																				.reverse()
																				.filter(({ year }) => year >= range[0] && year <= currentYear)
																				.reduce(
																					(cumulativeReturn, { totalReturn }) => cumulativeReturn + +totalReturn,
																					0
																				)
																				.toFixed(2))(year)}
																	</td>
																</tr>
															)
													)}
										</tbody>
									</Table>
								</div>
							</div>
						</Col>
						<Col>
							<div className='mb-3'>
								<h5 className='text-center'>Data Details</h5>
								<p>
									The S&P index returns start in 1926 when the index was first composed of 90 companies. The name of the
									index at that time was the Composite Index or S&P 90. In 1957 the index expanded to include the 500
									components we now have today. The returns include both price returns and re-invested dividends.
								</p>
							</div>
						</Col>
					</Row>
				</Container>
			</main>
		</div>
	);
}
