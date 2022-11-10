
/**
 * @export
 * @interface ICatalogFacade
 */
export interface ICatalogFacade {

    /**
     * @returns {Promise<any[]>}
     * @memberof ICatalogFacade
     */
    findAll(): Promise<any[]>;
}