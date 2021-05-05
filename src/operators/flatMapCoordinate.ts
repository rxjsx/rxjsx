import { flatMap } from 'rxjs/operators';
import { OperatorFunction, ObservableInput, ObservedValueOf, of, zip } from 'rxjs';

export function flatMapFormer<T1, T3, O extends ObservableInput<any>>(
  project: (v1: T1) => O,
): OperatorFunction<[T1, T3], [ObservedValueOf<O>, T3]> {
  return flatMap(([v1, v2]) => zip(project(v1), of(v2)));
}

export function flatMapLatter<T1, T2, O extends ObservableInput<any>>(
  project: (v1: T2) => O,
): OperatorFunction<[T1, T2], [T1, ObservedValueOf<O>]> {
  return flatMap(([v1, v2]) => zip(of(v1), project(v2)));
}
