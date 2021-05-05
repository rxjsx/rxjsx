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
});

describe('flatMapLatter', () => {
  it('should work properly', done => {
    of<[number, string]>([1, '1'])
      .pipe(flatMapLatter((y: string) => of(`${y}+${y}`)))
      .pipe(tap(([x, y]) => expect(x).toEqual(1)))
      .pipe(tap(([x, y]) => expect(y).toEqual('1+1')))
      .subscribe(_ => done());
  });
});
