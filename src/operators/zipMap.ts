import { map } from 'rxjs/operators';
import { OperatorFunction } from 'rxjs';

export function zipMap<T, R>(project: (v1: T) => R): OperatorFunction<T, [T, R]> {
  return map(val => [val, project(val)]);
}
