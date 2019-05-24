const convertFilePathToBaseDirectoryPath = require('./../index.js');

describe('convertToRootDirectoryPath testing ', () => {
    test('ending / is removed', () => {
        expect(convertFilePathToBaseDirectoryPath('example/', 'example/')).toBe('example');
    });
    test('relative path is changed', () => {
        expect(convertFilePathToBaseDirectoryPath('biggerParent/parentFolder/sourceFolder', 'biggerParent/parentFolder/sourceFolder/example/test.file')).toBe('sourceFolder/example/test.file');
    });
});
