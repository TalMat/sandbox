const delay = async (time: number): Promise<number> =>
    new Promise(res =>
        setTimeout(() => {
            console.log(time);
            res(time);
        },
        time
    ));

type Nested<T> = T | T[] | Nested<T>[];

/** Wraps nested arrays of Promises in Promise.all
 *  
 * Wraps nested single items in Promise.resolve
 *  
 * When awaited, returns resolved Promises in original nested format */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const asyncDeep = async <T = any>(p: Nested<Promise<T>>[]): Promise<Nested<T>[]> =>
    // @ts-ignore
    Promise.all(p.map((x) => (Array.isArray(x) ? asyncDeep(x) : Promise.resolve(x)))) as Promise<Nested<T>[]>;


(async () => {
    const result = await asyncDeep([
        delay(1000),
        delay(2000),
        delay(500),
        [
            delay(6000),
            delay(2000),
            delay(5000),    
            [
                delay(6000),
                delay(2000),
                delay(500)
            ]
        ]
    ]);

    console.log(result);
})()
