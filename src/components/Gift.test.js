import React from 'react';
import { shallow } from 'enzyme';
import Gift from './Gift';

describe('Gift', () => {
    const mockRemove = jest.fn();
    const id = 1;
    const props = { gift: { id }, removeGift: mockRemove };
    const gift = shallow(<Gift {...props} />);

    it('renders properly', () => {
        expect(gift).toMatchSnapshot();
    });

    it('initializes a person and a present in `state`', () => {
        expect(gift.state()).toEqual({ person: '', present: '' })
    });

    describe('when typing into the person input', () => {
        const test_person = 'Test Person';

        beforeEach(() => {
            gift.find('.input-person').simulate('change', { target: { value: test_person }})
        });

        it('updates the person in `state`', () => {
            expect(gift.state().person).toEqual(test_person)
        })
    });

    describe('when typing into the present input', () => {
        const test_present = 'Test Present';

        beforeEach(() => {
            gift.find('.input-present').simulate('change', { target: { value: test_present }});
        });

        it('updates the present in `state`', () => {
            expect(gift.state().present).toEqual(test_present);
        })
    });

    describe('when clicking the `Remove Gift` button', () => {
        beforeEach(() => {
            gift.find('.btn-remove').simulate('click');
        });

        it('calls the removeGift callBack', () => {
            expect(mockRemove).toHaveBeenCalledWith(id);
        });
    });
});