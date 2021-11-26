import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { zipMap } from './zipMap';

describe('zipWith', () => {
  it('should work properly', done => {
    of(2)
      .pipe(zipMap(num => `${num}`))
      .pipe(
        tap(([num, str]) => {
          expect(num).toEqual(2);
          expect(str).toEqual('2');
        }),
      )
      .subscribe(_ => done());
  });

  it('should propagate error properly', () => {
    of(2)
      .pipe(
        zipMap(num => {
          if (num === 2) {
            throw new Error('error');
          }
          return `${num}`;
        }),
      )
      .subscribe(
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        () => {},
        err => {
          expect(err.message).toEqual('error');
        },
      );
  });
});
