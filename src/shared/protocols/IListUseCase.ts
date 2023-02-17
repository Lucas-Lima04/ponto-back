
export interface IListUseCaseParams {
    isAdmin: boolean;
    search?: string;
    limit?: number;
    page?: number;
    orderBy?: string;
    orderMode?: string;
    userGuid: string;
}



export interface IListUseCase<Entity> {
    execute({ search, limit, page }: IListUseCaseParams): Promise<Entity[]>;
}
