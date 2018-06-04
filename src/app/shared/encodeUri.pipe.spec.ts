import { EncodeURI } from './encodeUri.pipe';

describe('EncodeURI pipe', () => {
    it('should encode non url chars to escape sequences', () => {
        const pipe = new EncodeURI();

        expect(pipe.transform('http://gaga.com/category/gägä')).toEqual('http://gaga.com/category/g%C3%A4g%C3%A4');
    });
});
