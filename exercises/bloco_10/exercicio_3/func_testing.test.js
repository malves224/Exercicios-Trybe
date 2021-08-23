const {
    encode,
    decode,
    techList,
    hydrate,
} = require('./func_testing');

describe('testano ', () => { 
    it ('teste do teste', () => { 
        expect(hydrate('2 cervejas')).toBe('2 copos de água');
    })
}
);