# RxJS Extensions
[![codeql](https://github.com/rxjsx/rxjsx/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/rxjsx/rxjsx/actions/workflows/codeql-analysis.yml)
[![Tests Status](https://github.com/rxjsx/rxjsx/actions/workflows/node.yml/badge.svg)](https://github.com/rxjsx/rxjsx/actions/workflows/node.yml)
[![Coverage Status](https://coveralls.io/repos/github/rxjsx/rxjsx/badge.svg?branch=aerabi/add-coverage)](https://coveralls.io/github/rxjsx/rxjsx?branch=aerabi/add-coverage)
![npm (scoped)](https://img.shields.io/npm/v/@rxjsx/rxjsx)
![Snyk Vulnerabilities for npm scoped package](https://img.shields.io/snyk/vulnerabilities/npm/@rxjsx/rxjsx)
[![Run on Repl.it](https://docs.replit.com/images/repls/run-on-replit.svg)](https://replit.com/@aerabi/flatListMap#index.ts)

RxJS operators to deal with arrays, tuples, and dragging the original values along while adding more values to the pipeline.

## :hammer_and_wrench: Install
```bash
npm install --save @rxjsx/rxjsx rxjs
```

## :technologist: Demo
```typescript
import { of } from 'rxjs';
import { flatListMap } from '@rxjsx/rxjsx';

of([1, 2, 3], [4], [5, 6])
    .pipe(flatListMap(x => of(x, 10+x)))
    .subscribe(console.log);
```
You can experiment with the above code by forking [this](https://replit.com/@aerabi/flatListMap#index.ts)
ReplIt repo or through this [Medium article](https://itnext.io/13-handy-rxjs-operators-ab5a9a1db60).

## :open_book: Examples
```typescript
// instead of this
of([1, 2, 3]).pipe(map(l => l.map(e => e * 2))

// you can do this
of([1, 2, 3]).pipe(listMap(e => e * 2)) // [2, 4, 6]
```

```typescript
// instead of this
let device;
deviceService.getDevice(id)
  .pipe(tap(_device => device = _device))
  .pipe(flatMap(_device => userService.getUser(device.owner)))
  .pipe(map(_user => userService.unassignDevice(_user, _device)))

// you can do this
deviceService.getDevice(id)
  .pipe(flatZipMap(device => userService.getUser(device.owner)))
  .pipe(map(([device, user]) => userService.unassignDevice(user, device)))
```

## :notebook: Manual

The available operators so far are the following:

Operator | Description |
--- | --- |
[`flatMap` / `mergeMap`](https://github.com/rxjsx/rxjsx/tree/master/docs/operators#flatmap) | RxJS's mergeMap alias |
[`zipMap`](https://github.com/rxjsx/rxjsx/tree/master/docs/operators#zipmap) | To zip the transformed value with the original value |
[`flatZipMap` / `mergeZipMap`](https://github.com/rxjsx/rxjsx/tree/master/docs/operators#flatzipmap) | Similar to [zipMap](https://github.com/rxjsx/rxjsx/tree/master/docs/operators#zipmap), but to be used when a transformation returns an observable | 
[`projectToFormer`](https://github.com/rxjsx/rxjsx/tree/master/docs/operators#projecttoformer) | To project an observable of pairs, to get the first coordinate |
[`projectToLatter`](https://github.com/rxjsx/rxjsx/tree/master/docs/operators#projecttolatter) | To project an observable of pairs, to get the second coordinate |
[`projectTo`](https://github.com/rxjsx/rxjsx/tree/master/docs/operators#projectto) | To project an observable of tuples | 
[`mapFormer`](https://github.com/rxjsx/rxjsx/tree/master/docs/operators#mapformer) | To transform the first coordinate of an observable of pairs | 
[`mapLatter`](https://github.com/rxjsx/rxjsx/tree/master/docs/operators#maplatter) | To transform the second coordinate of an observable of pairs | 
[`flatMapFormer` / `mergeMapFormer`](https://github.com/rxjsx/rxjsx/tree/master/docs/operators#flatmapformer) | Similar to [mapFormer](https://github.com/rxjsx/rxjsx/tree/master/docs/operators#mapformer), but to work on stream-returning transformations |
[`flatMapLatter` / `mergeMapLatter`](https://github.com/rxjsx/rxjsx/tree/master/docs/operators#flatmaplatter) | Similar to [mapLatter](https://github.com/rxjsx/rxjsx/tree/master/docs/operators#maplatter), but to work on stream-returning transformations | 
[`listMap`](https://github.com/rxjsx/rxjsx/tree/master/docs/operators#listmap) | To transform an observable of list, with a mapping on the list elements |
[`flatListMap` / `mergeListMap`](https://github.com/rxjsx/rxjsx/tree/master/docs/operators#flatlistmap) | To transform an observable of list, with a stream-returning member transformation |
[`listFlatMap`](https://github.com/rxjsx/rxjsx/tree/master/docs/operators#listflatmap) | To transform an observable of list, with a list-returning member transformation |
[`flatListFlatMap` / `mergeListFlatMap`](https://github.com/rxjsx/rxjsx/tree/master/docs/operators#flatlistflatmap) | To transform an observable of list, with a list-observable-returning transformation|

## :muscle: Thanks to all Contributors
[![List of Contributors](https://contrib.rocks/image?repo=rxjsx/rxjsx)](https://github.com/rxjsx/rxjsx/graphs/contributors)

## :books: Related Literature
- [13 Handy RxJS Operators to Deal with Arrays and Tuples](https://itnext.io/13-handy-rxjs-operators-ab5a9a1db60)

## :keyboard: Contributing
- [CONTRIBUTING.md](CONTRIBUTING.md)

## :pray: Support
This project needs your support. Don't forget to leave a :star: behind.
