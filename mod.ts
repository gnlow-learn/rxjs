import {
    of,
    map,
    groupBy,
    mergeMap,
    toArray,
} from "https://esm.sh/rxjs@7.8.2"

const a =
    of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
    .pipe(
        map(x => x * 2),
        groupBy(x => x > 10),
        mergeMap(x => x.pipe(toArray())),
    )

a.subscribe(console.log)
