# json-nd

`NdJson` is a utility class for parsing and stringifying newline-delimited JSON (NDJSON) data.

## Installation

```bash
npm install json-nd
```

## Usage

### Parsing NDJSON

```typescript
import { NdJson } from 'json-nd';

const data = `
{"name":"John","age":30}
{"name":"Jane","age":25}
{"name":"Bob","age":40}
`;

const parsedData = NdJson.parse<{ name: string, age: number }>(data);
console.log(parsedData);
// Output: [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }, { name: 'Bob', age: 40 }]
```

### Stringifying to NDJSON

```typescript
import { NdJson } from 'json-nd';

const jsonData = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Bob', age: 40 }
];

const ndjsonData = NdJson.stringify(jsonData);
console.log(ndjsonData);
// Output:
// {"name":"John","age":30}
// {"name":"Jane","age":25}
// {"name":"Bob","age":40}
```

## API

### `NdJson.parse<T>(data: string): T[]`

Parses NDJSON data into an array of objects of type `T`.

- `data`: The NDJSON data to parse.
- Returns: An array of objects of type `T` parsed from the NDJSON data.

### `NdJson.stringify(data: any[]): string`

Converts an array of objects into NDJSON format.

- `data`: The array of objects to stringify.
- Returns: The NDJSON string representation of the input data.

## License

This project is licensed under the BSD-3-Clause.