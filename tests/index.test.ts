import { NdJson } from '../src/index';

describe('NdJson', () => {
  const data = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' }
  ];

  const ndjsonData = '{"id":1,"name":"John"}\n{"id":2,"name":"Jane"}\n{"id":3,"name":"Bob"}';

  test('parse should convert NDJSON string to array of objects', () => {
    expect(NdJson.parse(ndjsonData)).toEqual(data);
  });

  test('stringify should convert array of objects to NDJSON string', () => {
    expect(NdJson.stringify(data)).toEqual(ndjsonData);
  });
});
