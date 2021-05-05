import { of } from 'rxjs';
import { flatListFlatMap, flatListMap, listFlatMap, listMap } from './listMap';
import { tap } from 'rxjs/operators';

describe('listMap', () => {
  it('should work properly', done => {
    of([1, 2])
      .pipe(listMap(x => x * 2))
      .pipe(tap(list => expect(list).toEqual([2, 4])))
      .subscribe(_ => done());
  });
});

describe('flatListMap', () => {
  it('should work properly', done => {
    of([1, 2])
      .pipe(flatListMap(x => of(x * 2)))
      .pipe(tap(list => expect(list).toEqual([2, 4])))
      .subscribe(_ => done());
  });
});

describe('listFlatMap', () => {
  it('should work properly', done => {
    of([1, 2])
      .pipe(listFlatMap(x => [x, x * 2]))
      .pipe(tap(list => expect(list).toEqual([1, 2, 2, 4])))
      .subscribe(_ => done());
  });
});

describe('flatListFlatMap', () => {
  it('should work properly', done => {
    of([1, 2])
      .pipe(flatListFlatMap(x => of([x, x * 2])))
      .pipe(tap(list => expect(list).toEqual([1, 2, 2, 4])))
      .subscribe(_ => done());
  });
});
