import { of } from "https://esm.sh/rxjs@7.8.2"

const a = of(1, 2)

a.subscribe(console.log)
