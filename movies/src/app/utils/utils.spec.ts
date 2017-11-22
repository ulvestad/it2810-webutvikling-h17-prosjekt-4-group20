import { flatten, unique, dateToYear, sortOnProp } from './utils';

describe('utils: flatten', async () => {
    const a = [[1, 2, 3], [4, 5], [6]];
    const b = [1, 2, 3, 4, 5, 6];

    it('flattens a list of lists', async () => {
        expect(flatten(a)).toEqual(b);
    })
});

describe('utils: unique', async () => {
    const a = [1, 1, 2, 3, 4, 4];
    const b = [1, 2, 3, 4];

    it('does not change unique list', async () => {
        expect(unique(b)).toEqual(b);
    })

    it('changes non-unique list', async () => {
        expect(unique(a)).not.toEqual(a);
    })

    it('removes duplicated elements', async () => {
        expect(unique(a)).toEqual(b);
    });
});

describe('utils: dateToYear', async () => {
    const a = '2017-10-04';
    const b = '2016-09-04';

    it('gets year from date-string', async () => {
        expect(dateToYear(a)).toEqual('2017');
        expect(dateToYear(b)).toEqual('2016');
    })
})

describe('utils: sortOnProp', async () => {
    const aList = [{name: 'b', val: 0}, {name: 'a', val: 2}, {name: 'c', val: 1}];

    const sortedOnName = [{name: 'a', val: 2}, {name: 'b', val: 0}, {name: 'c', val: 1}];
    it('Sorts on string prop', async () => {
        expect(sortOnProp('name', aList)).toEqual(sortedOnName);
    })

    const sortedOnVal = [{name: 'b', val: 0}, {name: 'c', val: 1}, {name: 'a', val: 2}];    
    it('Sorts on number prop', async () => {
        expect(sortOnProp('val', aList)).toEqual(sortedOnVal);
    })
});

