import { times } from "lodash";

const padArray = <T>(arr: T[], defaultVal: T, length: number) => {
    const output: T[] = [];
    for (let i = 0; i < length; i++)
        output.push(arr[i] || (typeof defaultVal === "object" ? { ...defaultVal } : defaultVal));
    return output;
}

const itemCount = 10;



const primitiveData = ["tom", "jerry"];
const primitiveDefault = "";

const nativeOutputPrimitive = padArray(primitiveData, primitiveDefault, itemCount);
console.log(nativeOutputPrimitive);

const lodashOutputPrimitive = times(itemCount, (i: number) => primitiveData[i] || primitiveDefault);
console.log(lodashOutputPrimitive);



const objData = [{ name: "tom"}, { name: "jerry" }];
const objDefault = { name: "" };

const nativeOutputObj = padArray(objData, objDefault, itemCount);
console.log(nativeOutputObj);

const lodashOutputObj = times(itemCount, (i: number) => objData[i] || objDefault);
console.log(lodashOutputObj);
