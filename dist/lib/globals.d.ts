export type PrismaDMMF = Awaited<ReturnType<typeof getGlobals>>["DMMF"];
export declare function getGlobals(): Promise<{
    PrismaClientKnownRequestError: typeof import("@prisma/client-runtime-utils").PrismaClientKnownRequestError;
    Decimal: typeof import("@prisma/client-runtime-utils").Decimal;
    DMMF: typeof import("@prisma/dmmf-v7") | typeof import("@prisma/dmmf-v6");
}>;
