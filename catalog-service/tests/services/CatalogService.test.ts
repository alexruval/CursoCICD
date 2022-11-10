process.env.NODE_ENV = 'test'

import { expect } from "chai";
import { CatalogService } from "../../src/services";
import { db } from '../../src/config/connection/database';
import Catalog from "../../src/models/Catalog.model";
import * as Kafka from "../../src/config/stream/kafka";

describe('CatalogService Test', () => {

  before('Init', async() => {
    await db.sync({ force: true});
    Catalog.create({
      id: 1,
      name: 'test',
      createdAt: '2020-01-01',
      updatedAt: '2020-01-01'
    });
    Catalog.create({
      id: 2,
      name: 'test2',
      createdAt: '2020-01-01',
      updatedAt: '2020-01-01'
    });

    //Para lanzar pruebas con kafka
    // let topics = [
    //   'pruebas',
    //   'test'
    // ];
    // try{
    //     await Kafka.init(topics);
    //     console.log('Connected to Kafka');

    // }catch(err){
    //     console.log('Error', err);
    // }
  });

  describe('FindAll', async() => {
    it('should return one user', async () => {
      const Catalog: any[] = await CatalogService.findAll();
      expect(2).equal(Catalog.length);
    });
  });

});