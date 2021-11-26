import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { mapFormer, mapLatter } from './mapCoordinate';

describe('mapFormer', () => {
  it('should work properly', done => {
    of<[number, string]>([1, '1'])
      .pipe(mapFormer(x => x * 2))
      .pipe(tap(([x, y]) => expect(x).toEqual(2)))
      .pipe(tap(([x, y]) => expect(y).toEqual('1')))
      .subscribe(_ => done());
  });

  it('should propagate error properly', () => {
    const error = new Error('error');
    of<[number, string]>([1, '1'])
      .pipe(
        mapFormer(x => {
          if (x === 1) {
            throw error;
          }
          return x * 2;
        }),
      )
      .subscribe(
        _ => fail('should not emit'),
        err => expect(err).toEqual(error),
      );
  });
});

describe('mapLatter', () => {
  it('should work properly', done => {
    of<[number, string]>([1, '1'])
      .pipe(mapLatter((y: string) => `${y}+${y}`))
      .pipe(tap(([x, y]) => expect(x).toEqual(1)))
      .pipe(tap(([x, y]) => expect(y).toEqual('1+1')))
      .subscribe(_ => done());
  });

  it('should propagate error properly', () => {
    const error = new Error('error');
    of<[number, string]>([1, '1'])
      .pipe(
        mapLatter(y => {
          if (y === '1') {
            throw error;
          }
          return `${y}+${y}`;
        }),
      )
      .subscribe(
        _ => fail('should not emit'),
        err => expect(err).toEqual(error),
      );
  });
});
