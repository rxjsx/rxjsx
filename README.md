# RxJS Extensions
[![codeql](https://github.com/rxjsx/rxjsx/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/rxjsx/rxjsx/actions/workflows/codeql-analysis.yml)
[![Tests Status](https://github.com/rxjsx/rxjsx/actions/workflows/node.yml/badge.svg)](https://github.com/rxjsx/rxjsx/actions/workflows/node.yml)
[![Coverage Status](https://coveralls.io/repos/github/rxjsx/rxjsx/badge.svg?branch=aerabi/add-coverage)](https://coveralls.io/github/rxjsx/rxjsx?branch=aerabi/add-coverage)
![npm (scoped)](https://img.shields.io/npm/v/@rxjsx/rxjsx)
![Snyk Vulnerabilities for npm scoped package](https://img.shields.io/snyk/vulnerabilities/npm/@rxjsx/rxjsx)

## Install
```bash
npm install --save @rxjsx/rxjsx
```

## Manual

The available operators so far are the following:
Operator | Link | Description |
--- | --- | --- |
flatMap | [flatMap](https://github.com/rxjsx/rxjsx/tree/master/docs/operators#flatmap) | RxJS's mergeMap alias |
zipMap | [zipMap](https://github.com/rxjsx/rxjsx/tree/master/docs/operators#zipmap) | To transform a value |
flatZipMap | [flatZipMap](https://github.com/rxjsx/rxjsx/tree/master/docs/operators#flatzipmap) | Similar to [flatMap](https://github.com/rxjsx/rxjsx/tree/master/docs/operators#flatmap), but to be used when a transformation returns an observable | 
projectToFormer | [projectToFormer](https://github.com/rxjsx/rxjsx/tree/master/docs/operators#projecttoformer) | To project an observable of pairs, to get the first coordinate |
projectToLatter | [projectToLatter](https://github.com/rxjsx/rxjsx/tree/master/docs/operators#projecttolatter) | To project an observable of pairs, to get the second coordinate |
projectTo | [projectTo](https://github.com/rxjsx/rxjsx/tree/master/docs/operators#projectto) | To project an observable of tuples | 
mapFormer | [mapFormer](https://github.com/rxjsx/rxjsx/tree/master/docs/operators#mapformer) | To transform the first coordinate of an observable of pairs | 
mapLatter |  [mapLatter](https://github.com/rxjsx/rxjsx/tree/master/docs/operators#maplatter) | To transform the second coordinate of an observable of pairs | 
flatMapFormer | [flatMapFormer](https://github.com/rxjsx/rxjsx/tree/master/docs/operators#flatmapformer) | Similar to [mapFormer](https://github.com/rxjsx/rxjsx/tree/master/docs/operators#mapformer), but to work on stream-returning transformations |
flatMapLatter |  [flatMapLatter](https://github.com/rxjsx/rxjsx/tree/master/docs/operators#flatmaplatter) | Similar to [mapLatter](https://github.com/rxjsx/rxjsx/tree/master/docs/operators#maplatter), but to work on stream-returning transformations | 
listMap | [listMap](https://github.com/rxjsx/rxjsx/tree/master/docs/operators#listmap) | To transform an observable of list, with a mapping on the list elements |
flatListMap | [flatListMap](https://github.com/rxjsx/rxjsx/tree/master/docs/operators#flatlistmap) | To transform an observable of list, with a stream-returning member transformation |
listFlatMap | [listFlatMap](https://github.com/rxjsx/rxjsx/tree/master/docs/operators#listflatmap) | To transform an observable of list, with a list-returning member transformation |
flatListFlatMap |  [flatListFlatMap](https://github.com/rxjsx/rxjsx/tree/master/docs/operators#flatlistflatmap) | To transform an observable of list, with a list-observable-returning transformation|
