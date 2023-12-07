export interface IPrismaObject {
  findMany: () => Promise<[{ id: number }]>;
}
