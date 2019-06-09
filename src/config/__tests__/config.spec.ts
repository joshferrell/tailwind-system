import boxStyles from '../box-styles.config';

describe('tailwind theme configurations', () => {
    it('should have box styles', () => {
        expect(boxStyles).toMatchSnapshot();
    })
})