import { from, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { projectTo, projectToFormer, projectToLatter } from './projectTo';

describe('projectToFormer', () => {
  it('should work properly', done => {
    const source: [number, number][] = [[1, 2], [3, 4]];
    from(source)
      .pipe(projectToFormer())
      .pipe(tap(x => expect(x % 2).toEqual(1)))
      .subscribe(x => {
        if (x === 3) {
          done();
        }
      });
  });
});

describe('projectToLatter', () => {
  it('should work properly', done => {
    const source: [number, number][] = [[1, 2], [3, 4]];
    from(source)
      .pipe(projectToLatter())
      .pipe(tap(x => expect(x % 2).toEqual(0)))
      .subscribe(x => {
        if (x === 4) {
          done();
        }
      });
  });
});

describe('projectTo', () => {
  it('index 0 should work properly', done => {
    of([1, 2], [3, 4])
      .pipe(projectTo(0))
      .pipe(tap(x => expect(x % 2).toEqual(1)))
      .subscribe(x => {
        if (x === 3) {
          done();
        }
      });
  });

  it('index 1 should work properly', done => {
    of([1, 2], [3, 4])
      .pipe(projectTo(1))
      .pipe(tap(x => expect(x % 2).toEqual(0)))
      .subscribe(x => {
        if (x === 4) {
          done();
        }
      });
  });
});
