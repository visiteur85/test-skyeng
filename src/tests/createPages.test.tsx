import {createPages} from "../utils/createPages";

describe('createPages', () => {
    it('should create pages when pagesCount is greater than 10 and currentPage is greater than 5', () => {
        const pages: number[] = [];
        const pagesCount = 15;
        const currentPage = 8;
        createPages(pages, pagesCount, currentPage);
        expect(pages).toEqual([4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
    });

    it('should create pages when pagesCount is greater than 10 and currentPage is less than or equal to 5', () => {
        const pages: number[] = [];
        const pagesCount = 15;
        const currentPage = 3;
        createPages(pages, pagesCount, currentPage);
        expect(pages).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it('should create pages when pagesCount is less than or equal to 10', () => {
        const pages: number[] = [];
        const pagesCount = 7;
        const currentPage = 2;
        createPages(pages, pagesCount, currentPage);
        expect(pages).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });
});
