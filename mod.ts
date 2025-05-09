import {
    of,
    map,
    groupBy,
    mergeMap,
    toArray,
    merge,
    Subject,
    AsyncSubject,
    BehaviorSubject,
} from "https://esm.sh/rxjs@7.8.2"

const a =
    of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
    .pipe(
        map(x => x * 2),
        groupBy(x => x > 10),
        mergeMap(x => x.pipe(toArray())),
    )

a.subscribe(console.log)

const s1 = new Subject<string>()
const s2 = new BehaviorSubject<string>("s2 init")

const b = merge(
    s1,
    s2,
)

s1.next("you can't see this")
s2.next("s2 what")
s2.next("s2 what")

b.subscribe(console.log)

s1.next("s1 hi")
s2.next("s2 hi")
s1.next("s1 hi")
s2.next("s2 hi")
