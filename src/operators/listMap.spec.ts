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

  it('should propagate error properly', () => {
    of([1, 2])
      .pipe(
        listMap(x => {
          if (x === 1) {
            throw new Error('error');
          }
          return x * 2;
        }),
      )
      .subscribe(
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        _ => {},
        err => expect(err.message).toEqual('error'),
      );
  });
});

describe('flatListMap', () => {
  it('should work properly', done => {
    of([1, 2])
      .pipe(flatListMap(x => of(x * 2)))
      .pipe(tap(list => expect(list).toEqual([2, 4])))
      .subscribe(_ => done());
  });

  it('should propagate error properly', () => {
    of([1, 2])
      .pipe(
        flatListMap(x => {
          if (x === 1) {
            throw new Error('error');
          }
          return of(x * 2);
        }),
      )
      .subscribe(
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        _ => {},
        err => expect(err.message).toEqual('error'),
      );
  });
});

describe('listFlatMap', () => {
  it('should work properly', done => {
    of([1, 2])
      .pipe(listFlatMap(x => [x, x * 2]))
      .pipe(tap(list => expect(list).toEqual([1, 2, 2, 4])))
      .subscribe(_ => done());
  });

  it('should propagate error properly', () => {
    of([1, 2])
      .pipe(
        listFlatMap(x => {
          if (x === 1) {
            throw new Error('error');
          }
          return [x, x * 2];
        }),
      )
      .subscribe(
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        _ => {},
        err => expect(err.message).toEqual('error'),
      );
  });
});

describe('flatListFlatMap', () => {
  it('should work properly', done => {
    of([1, 2])
      .pipe(flatListFlatMap(x => of([x, x * 2])))
      .pipe(tap(list => expect(list).toEqual([1, 2, 2, 4])))
      .subscribe(_ => done());
  });

  it('should propagate error properly', () => {
    of([1, 2])
      .pipe(
        flatListFlatMap(x => {
          if (x === 1) {
            throw new Error('error');
          }
          return of([x, x * 2]);
        }),
      )
      .subscribe(
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        _ => {},
        err => expect(err.message).toEqual('error'),
      );
  });
});
