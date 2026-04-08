import type { PrismaClient } from "@prisma/client";
import type * as runtime from "@prisma/client/runtime/library";
import type { DMMF as DMMFV7 } from '@prisma/generator-helper-v7';
import type { DMMF as DMMFV6 } from '@prisma/generator-helper-v6';
import { Data } from "./prismock";
import { type ExtensionsDefinition } from "./extensions";
import type { PGlite } from "@electric-sql/pglite";
import type { PrismaPGlite } from "pglite-prisma-adapter";
import { type PrismaDMMF } from "./globals";
type GetData = () => Promise<Data>;
type SetData = (data: Data) => Promise<void>;
export interface PrismockData {
    getData: GetData;
    setData: SetData;
    reset: () => Promise<void>;
}
export type PrismockClientType<T = PrismaClient> = T & PrismockData;
export type PrismockOptions = {
    usePgLite?: undefined | null | {
        schemaPath: string;
    };
};
export declare class Prismock {
    schemaPath: string;
    datamodel?: DMMFV7.Document | DMMFV6.Document;
    PrismaDMMF?: PrismaDMMF;
    private genPromise;
    protected constructor(schemaPath: string);
    static create<PC = PrismaClient>(schemaPath: string): Promise<PrismockClientType<PC>>;
    static createDefault(schemaPath: string): Promise<PrismaClient<import(".prisma").Prisma.PrismaClientOptions, never, runtime.DefaultArgs> & PrismockData>;
    reset(): Promise<void>;
    private generate;
    $connect(): Promise<this>;
    $disconnect(): Promise<void>;
    $on(): void;
    $use(): this;
    $executeRaw(): Promise<number>;
    $executeRawUnsafe(): Promise<number>;
    $queryRaw(): Promise<never[]>;
    $queryRawUnsafe(): Promise<never[]>;
    $extends(extensionDefs: ExtensionsDefinition): PrismaClient<import(".prisma").Prisma.PrismaClientOptions, never, runtime.DefaultArgs>;
    $transaction(args: any): Promise<any>;
}
export declare function getPgLitePrismockData(options: {
    schemaPath: string;
    pglite: InstanceType<typeof PGlite>;
    adapter: InstanceType<typeof PrismaPGlite>;
    datamodel: DMMFV7.Document | DMMFV6.Document;
    prismaClient: Record<string, any>;
}): {
    reset: () => Promise<void>;
    getData: () => Promise<Data>;
    setData: (data: Data) => Promise<void>;
};
type GetClientOptions<PrismaClientClassType extends new (...args: any[]) => any> = {
    prismaClient: PrismaClientClassType;
    schemaPath: string;
    usePgLite?: boolean | null | undefined;
    /**
     * When `usePgLite` is true, contrib extension module names to load from
     * `@electric-sql/pglite/contrib/<name>`. Omit or pass `[]` to load none.
     */
    pgLiteExtensions?: string[];
    clientOptions?: Record<string, any>;
};
export declare function getClient<PrismaClientType extends new (...args: any[]) => any>(options: GetClientOptions<PrismaClientType>): Promise<PrismockClientType<InstanceType<PrismaClientType>>>;
type GetClientClassOptions<PrismaClientClassType extends new (...args: any[]) => any> = {
    PrismaClient: PrismaClientClassType;
    schemaPath: string;
    usePgLite?: boolean | null | undefined;
    /**
     * When `usePgLite` is true, contrib extension module names to load from
     * `@electric-sql/pglite/contrib/<name>`. Omit or pass `[]` to load none.
     */
    pgLiteExtensions?: string[];
};
type PrismaClientClassMocked<PrismaClientType extends new (...args: any[]) => any> = PrismaClientType extends new (...args: infer Args) => infer Instance ? (new (...args: Args) => Instance & PrismockData) & PrismaClientType : never;
export declare function getClientClass<PrismaClientType extends new (...args: any[]) => any>(options: GetClientClassOptions<PrismaClientType>): Promise<PrismaClientClassMocked<PrismaClientType>>;
export declare function getDefaultClient(): Promise<PrismockClientType<PrismaClient<import(".prisma").Prisma.PrismaClientOptions, unknown, runtime.InternalArgs>>>;
export declare function getDefaultClientClass(): Promise<(new (optionsArg?: import(".prisma").Prisma.Subset<import(".prisma").Prisma.PrismaClientOptions, import(".prisma").Prisma.PrismaClientOptions> | undefined) => PrismaClient<import(".prisma").Prisma.PrismaClientOptions, unknown, runtime.InternalArgs> & PrismockData) & typeof import(".prisma").PrismaClient>;
/**
 * For backwards compatibility
 */
export declare const createPrismock: typeof getDefaultClient;
export declare const createPrismockClass: typeof getDefaultClientClass;
export {};
