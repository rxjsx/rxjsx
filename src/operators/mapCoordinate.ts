import { map } from 'rxjs/operators';
import { OperatorFunction } from 'rxjs';

export function mapFormer<T1, T2, T3>(project: (v1: T1) => T2): OperatorFunction<[T1, T3], [T2, T3]> {
  return map(([v1, v2]) => [project(v1), v2]);
}

export function mapLatter<T1, T2, T3>(project: (v1: T2) => T3): OperatorFunction<[T1, T2], [T1, T3]> {
  return map(([v1, v2]) => [v1, project(v2)]);
}
