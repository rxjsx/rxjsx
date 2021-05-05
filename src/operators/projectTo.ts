import { map } from 'rxjs/operators';
import { OperatorFunction } from 'rxjs';

export function projectToFormer<T1, T2>(): OperatorFunction<[T1, T2], T1> {
  return map(([v1, _]) => v1);
}

export function projectToLatter<T1, T2>(): OperatorFunction<[T1, T2], T2> {
  return map(([_, v2]) => v2);
}

export function projectTo<T>(coordinateIndex: number): OperatorFunction<T[], T> {
  return map(list => list[coordinateIndex]);
}
