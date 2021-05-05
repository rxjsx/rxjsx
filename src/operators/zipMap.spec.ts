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
});
