import { Sorter } from "./Sorter";
export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  get length(): number {
    return this.data.length;
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }
  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}
export interface PathClass {
  length(): number;
  path: (string | number)[];
  mapPath: (string | number)[];
  endOfPath(): boolean;
  currentLevel(): string | number;
}
export class PathCollection {
  constructor(public path: (string | number)[]) {}
  get length(): number {
    return this.path.length;
  }
  get endOfPath(): boolean {
    return this.path.length < 1;
  }
  get currentLevel(): string | number | undefined {
    return this.path.shift();
  }
}
export class Path {
  constructor(public pathString: string) {}
  path: (string | number)[] = this.pathString
    .split(/\s*(?:\.|\[|\]|\|)\s*/)
    .slice(1)
    .filter(string => string.length > 0)
    .map(string => {
      if (string == Number(string)) return Number(string);
      return string;
    });
  mapPath: (string | number)[] = this.pathString.split(/\s*(?:\:|=)\s*/);
}

export class NestedSpread {
  // constructor(public object: any, path: string[], value: (string | boolean | number))

  get length(): number {
    return this.length;
  }
}
