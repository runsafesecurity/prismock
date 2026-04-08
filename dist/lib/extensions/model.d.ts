import type { Prisma, PrismaClient } from '@prisma/client';
import type { DefaultArgs, ExtendsHook } from '@prisma/client/runtime/library';
type ExtensionsDefinition = Parameters<ExtendsHook<'define', Prisma.TypeMapCb, DefaultArgs>>[0];
export declare function applyModelExtensions(client: PrismaClient, extensions: ExtensionsDefinition): PrismaClient;
export {};
