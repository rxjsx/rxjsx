import { flatMap } from 'rxjs/operators';
import { ObservableInput, ObservedValueOf, of, OperatorFunction, zip } from 'rxjs';

export function flatZipMap<T, O extends ObservableInput<any>>(project: (value: T) => O): OperatorFunction<T, [T, ObservedValueOf<O>]> {
  return flatMap((val: T) => zip(of(val), project(val)));
}
