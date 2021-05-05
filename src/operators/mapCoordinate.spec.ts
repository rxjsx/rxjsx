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
});

describe('mapLatter', () => {
  it('should work properly', done => {
    of<[number, string]>([1, '1'])
      .pipe(mapLatter((y: string) => `${y}+${y}`))
      .pipe(tap(([x, y]) => expect(x).toEqual(1)))
      .pipe(tap(([x, y]) => expect(y).toEqual('1+1')))
      .subscribe(_ => done());
  });
});
