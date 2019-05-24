const baseDirectoryConverter = require('./../index.js');

describe('convertToRootDirectoryPath testing ', () => {
    test('ending / is removed', () => {
        expect(baseDirectoryConverter('example/', 'example/')).toBe('example');
    });
    test('relative path is changed', () => {
        expect(baseDirectoryConverter('parentDirectory/childDirectory/sourceDirectory', 'parentDirectory/childDirectory/sourceDirectory/example/test.file')).toBe('sourceDirectory/example/test.file');
    });
});
