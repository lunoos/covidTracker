import { shallow } from 'enzyme';
import BarGraph from './Bar';
import react from 'react';

it('expect to render BarGraph component', () => {
	
	expect(shallow(<BarGraph />)).toMatchSnapshot();
})