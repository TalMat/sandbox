import { Column, Entity, PrimaryGeneratedColumn, createConnection, getConnection } from "typeorm";

export const databaseName = "test-db";
export const connect = async () => {
    // add some credentials to an actual database to connect
    // unfortunately typeorm 2.x requires an active connection to use 'nonVirtualColumns'
    const credentials = {};

    await createConnection({
        entities: [__dirname + "/*.js"],
        logging: ["error", "warn"],
        extra: {
            trustServerCertificate: true
        },
        name: databaseName,
        synchronize: false,
        type: "mssql",
        ...credentials
    });
}

export const disconnect = async () => {
    await getConnection(databaseName).close();
}

export interface TestEntity {
    LastName: string;
    FirstName: string;
    DOB: string;
    Zip?: string;
    City: string;
    State: string;
}

@Entity("TestEntity")
export class TestEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    public TestEntityID: number;

    @Column({ type: "varchar" })
    public LastName: string;

    @Column({ type: "varchar" })
    public FirstName: string;

    @Column({ type: "varchar" })
    public DOB: string;

    @Column({ type: "varchar" })
    public Zip?: string;

    @Column({ type: "varchar" })
    public City: string;

    @Column({ type: "varchar" })
    public State: string;

    public static get paramCount() {
        return getConnection(databaseName).getMetadata(TestEntity).nonVirtualColumns.length;
    }

    constructor(entity?: TestEntity) {
        if (!entity) return;
        Object.assign(this, entity);
    }
}
