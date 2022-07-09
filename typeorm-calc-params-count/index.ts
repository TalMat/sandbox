import { TestEntity, connect, disconnect } from "./TestEntity";

(async () => {
    await connect();
    const p = TestEntity.paramCount;
    console.log(p);
    await disconnect();
})()