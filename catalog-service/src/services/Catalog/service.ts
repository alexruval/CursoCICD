import { ICatalogService } from "./interface";
import Catalog from "../../models/Catalog.model";
import * as Kafka from "../../config/stream/kafka"

/**
 * @export
 * @implements {ICatalogModelService}
 */
const CatalogService: ICatalogService = {
    /**
     * @returns {Promise < any[] >}
     * @memberof CatalogFacade
     */
    async findAll(): Promise<any[]> {
        // Para enviar un mensaje a kafka
        // await Kafka.send("test", 'Hello');
        return Catalog.findAll();
    }
}

export default CatalogService;