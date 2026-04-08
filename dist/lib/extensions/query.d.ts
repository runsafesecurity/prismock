import type { Prisma } from "@prisma/client";
import type { ExtendsHook, DefaultArgs } from "@prisma/client/runtime/library";
import type { PrismaClient } from "@prisma/client";
export declare function applyQueryExtensions(client: PrismaClient, extensions: Parameters<ExtendsHook<"define", Prisma.TypeMapCb, DefaultArgs>>[0]): PrismaClient;
