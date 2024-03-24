export type AwaitedReturnType<T extends (...args: any[]) => unknown> = Awaited<ReturnType<T>>;
