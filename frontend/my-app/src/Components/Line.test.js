import { shallow } from 'enzyme';
import LineGraph from './Bar';
import react from 'react';

it('expect to render LineGraph component', () => {
	
	expect(shallow(<LineGraph />)).toMatchSnapshot();
})