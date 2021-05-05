import { ObservableInput, ObservedValueOf, OperatorFunction, zip } from 'rxjs';
import { map } from 'rxjs/operators';
import { flatMap } from './flatMap';

export function listMap<T, R>(project: (v1: T) => R): OperatorFunction<T[], R[]> {
  return map(list => list.map(project));
}

export function flatListMap<T, O extends ObservableInput<any>>(
  project: (v1: T) => O,
): OperatorFunction<T[], ObservedValueOf<O>[]> {
  return flatMap(list => zip(...list.map(project)));
}

export function listFlatMap<T, R>(project: (v1: T) => R[]): OperatorFunction<T[], R[]> {
  return map(list => list.flatMap(project));
}

export function flatListFlatMap<T, R, O extends ObservableInput<R[]>>(
  project: (v1: T) => O,
): OperatorFunction<T[], R[]> {
  return flatMap(list =>
    zip(...list.flatMap(value => project(value))).pipe(map(list => list.flatMap(arrayMember => arrayMember))),
  );
}
