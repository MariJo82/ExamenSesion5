import {TypeOrmModuleOptions} from '@nestjs/typeorm';
/**
 * File with the configuration to the database
 */
export const typeOrmConfig: TypeOrmModuleOptions ={
    type: 'mongodb',
    //host: '127.0.0.1',
    host: 'localhost',
    port: 27017,
    database: "BdAvon",
    entities: ['dist/**/*.entity.js'],
    synchronize: true,
    useUnifiedTopology: true
}


