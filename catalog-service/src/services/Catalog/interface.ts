
/**
 * @export
 * @interface ICatalogService
 */
export interface ICatalogService {

    /**
     * @returns {Promise<any[]>}
     * @memberof ICatalogService
     */
    findAll(): Promise<any[]>;
}