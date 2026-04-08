import type { Prisma, PrismaClient } from "@prisma/client";
import type { DefaultArgs, ExtendsHook } from "@prisma/client/runtime/library";
import type { DMMF as DMMFV7 } from "@prisma/generator-helper-v7";
import type { DMMF as DMMFV6 } from "@prisma/generator-helper-v6";
import type { PrismaDMMF } from "../globals";
export declare function applyResultExtensions(client: PrismaClient, extensions: Parameters<ExtendsHook<"define", Prisma.TypeMapCb, DefaultArgs>>[0], datamodel: DMMFV7.Document | DMMFV6.Document, PrismaDMMF: PrismaDMMF): PrismaClient;
