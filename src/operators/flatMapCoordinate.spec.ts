import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { flatMapFormer, flatMapLatter } from './flatMapCoordinate';

describe('flatMapFormer', () => {
  it('should work properly', done => {
    of<[number, string]>([1, '1'])
      .pipe(flatMapFormer(x => of(x * 2)))
      .pipe(tap(([x, y]) => expect(x).toEqual(2)))
      .pipe(tap(([x, y]) => expect(y).toEqual('1')))
      .subscribe(_ => done());
  });

  it('should propagate error properly', () => {
    const error = new Error('error');
    of<[number, string]>([1, '1'])
      .pipe(
        flatMapFormer(x => {
          throw error;
        }),
      )
      .subscribe(
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        () => {},
        err => expect(err).toEqual(error),
      );
  });
});

describe('flatMapLatter', () => {
  it('should work properly', done => {
    of<[number, string]>([1, '1'])
      .pipe(flatMapLatter((y: string) => of(`${y}+${y}`)))
      .pipe(tap(([x, y]) => expect(x).toEqual(1)))
      .pipe(tap(([x, y]) => expect(y).toEqual('1+1')))
      .subscribe(_ => done());
  });

  it('should propagate error properly', () => {
    const error = new Error('error');
    of<[number, string]>([1, '1'])
      .pipe(
        flatMapLatter(y => {
          throw error;
        }),
      )
      .subscribe(
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        () => {},
        err => expect(err).toEqual(error),
      );
  });
});
