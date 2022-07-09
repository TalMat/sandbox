import { times } from "lodash";

const data = [{ name: "tom"}, { name: "jerry" }];
const defaultObj = { name: "" };
const itemCount = 10;

const output = times(itemCount, (i) => data[i] || defaultObj);

console.log(output);
