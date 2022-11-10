process.env.NODE_ENV = 'test'

import { expect } from "chai";
import CatalogFacade from '../../src/facade/Catalog/facade';
import { db } from '../../src/config/connection/database';
import Catalog from "../../src/models/Catalog.model";
import * as Kafka from "../../src/config/stream/kafka";

describe('CatalogFacade Test', () => {

    before('Init', async() => {
        await db.sync({ force: true});
        Catalog.create({
        id: 1,
        name: 'test',
        createdAt: '2020-01-01',
        updatedAt: '2020-01-01'
        });

        //Para lanzar pruebas con kafka
        // let topics = [
        //     'pruebas',
        //     'test'
        // ];
        // try{
        //     await Kafka.init(topics);
        //     console.log('Connected to Kafka');

        // }catch(err){
        //     console.log('Error', err);
        // }
    });
  
    describe('FindAll', () => {
        it('should return one user', async () => {
            const Catalog: any[] = await CatalogFacade.findAll();
            expect(1).equal(Catalog.length);
        });
    });
});