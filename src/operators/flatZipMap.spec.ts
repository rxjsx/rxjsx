import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { flatZipMap } from './flatZipMap';

describe('flatZipWith', () => {
  it('should work properly', done => {
    of(2)
      .pipe(flatZipMap(num => of(`${num}`)))
      .pipe(
        tap(([num, str]) => {
          expect(num).toEqual(2);
          expect(str).toEqual('2');
        }),
      )
      .subscribe(_ => done());
  });
});
