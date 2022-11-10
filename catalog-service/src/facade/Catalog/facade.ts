import { CatalogService } from "../../services";
import { ICatalogFacade } from "./interface";


/**
 * @export
 * @implements {ICatalogModelService}
 */
const CatalogFacade: ICatalogFacade = {
    /**
     * @returns {Promise < any[] >}
     * @memberof CatalogFacade
     */
    async findAll(): Promise<any[]> {

        let Catalog = await CatalogService.findAll();
        return Catalog;
    }
}

export default CatalogFacade;