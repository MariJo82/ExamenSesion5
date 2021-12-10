import { Logger } from "@nestjs/common";
import { EntityRepository, MongoRepository } from "typeorm";
import {articuloAvonEntity} from "./articuloAvon.entity";
import { ArticuloDTO } from "src/DTO/articulo.dto";


@EntityRepository(articuloAvonEntity)

export class CatalogoAvonRepository extends MongoRepository<articuloAvonEntity>{

//private logger = new Logger('CatalogoAvon');

//@param nuevoArticulo string

async crearArticulo(data: ArticuloDTO){
    // declaracion
    const {nombreProducto, descripcion,precio,lugarCompra, fechaCreacion} = data;
    //instancia
    const articulo = new articuloAvonEntity();
    //updates
    articulo.nombreProducto = nombreProducto;
    articulo.descripcion = descripcion;    
    articulo.precio = precio;
    articulo.lugarCompra = lugarCompra;
    articulo.fechaCreacion = fechaCreacion;
    return await articulo.save();
}

async editarArticulo(data: ArticuloDTO){
    // declaracion
    const {nombreProducto, descripcion,precio,lugarCompra, fechaCreacion} = data;
    //instancia
    const articulo = new articuloAvonEntity();
    //updates
    articulo.nombreProducto = data.nombreProducto;
    articulo.descripcion = data.descripcion;    
    articulo.precio = data.precio;
    articulo.lugarCompra = data.lugarCompra;
    articulo.fechaCreacion = data.fechaCreacion;
    return await articulo.save();
}

}