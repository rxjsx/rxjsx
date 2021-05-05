import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { flatMap } from './flatMap';

describe('flatMap', () => {
  it('should work properly', done => {
    of(2)
      .pipe(flatMap(n => of(n * 2)))
      .pipe(tap(res => expect(res).toEqual(4)))
      .subscribe(_ => done());
  });
});
