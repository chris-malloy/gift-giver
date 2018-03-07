import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />);

describe('App', () => {
    it('renders correctly', () => {
        expect(app).toMatchSnapshot();
    });

    it('initializes the `state` with an empty array of gifts', () => {
        expect(app.state().gifts).toEqual([]);
    });

    describe('when clicking the `add-gift` button', () => {
        beforeEach(() => {
            app.find('.btn-add').simulate('click')
        });

        afterEach(() => {
            app.setState({ gifts: [] });
        });

        it('adds and new gift to `state`', () => {
            expect(app.state().gifts).toEqual([{ id: 1 }]);
        });

        it('adds a new gift to rendered list', () => {
            expect(app.find('.gift-list').children().length).toEqual(1);
        });
    });

    
});

