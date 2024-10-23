import { getMonth, MONTHS } from './index';

describe('getMonth', () => {
    const testCases = [
        { date: new Date(2023, 0, 1), expected: MONTHS[1] },
        { date: new Date(2023, 1, 1), expected: MONTHS[2] },
        { date: new Date(2023, 2, 1), expected: MONTHS[3] },
        { date: new Date(2023, 3, 1), expected: MONTHS[4] },
        { date: new Date(2023, 4, 1), expected: MONTHS[5] },
        { date: new Date(2023, 5, 1), expected: MONTHS[6] },
        { date: new Date(2023, 6, 1), expected: MONTHS[7] },
        { date: new Date(2023, 7, 1), expected: MONTHS[8] },
        { date: new Date(2023, 8, 1), expected: MONTHS[9] },
        { date: new Date(2023, 9, 1), expected: MONTHS[10] },
        { date: new Date(2023, 10, 1), expected: MONTHS[11] },
        { date: new Date(2023, 11, 1), expected: MONTHS[12] },
    ];

    testCases.forEach(({ date, expected }, index) => {
        it(`should return the correct month name for ${MONTHS[index + 1]}`, () => {
            expect(getMonth(date)).toBe(expected);
        });
    });
});
