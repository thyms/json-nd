export class NdJson {
  static parse<T>(data: string): T[] {
    const lines = data.trim().split('\n');
    return lines.map(line => JSON.parse(line)) as T[];
  }

  static stringify(data: any[]): string {
    return data.map(item => JSON.stringify(item)).join('\n');
  }
}
