// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import { shallow, mount, render } from 'enzyme';
import App from '../App';
import react from 'react';

it('expect to render BarGraph component', () => {
	
	expect(shallow(<App />)).toMatchSnapshot();
})