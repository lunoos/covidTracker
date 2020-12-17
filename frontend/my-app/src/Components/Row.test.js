import { shallow } from 'enzyme';
import Row from './Row';
import react from 'react';

it('expect to render Row component', () => {
	const mockColName = ["country", "cases"];
	const mockData = [
    {
    	country: "india",
    	cases: 23,
    	deaths: 44,
    	recovered:22
    }
	]
	expect(shallow(<Row colName={mockColName} data={mockData} />)).toMatchSnapshot();
})