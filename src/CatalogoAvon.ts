import { Logger } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { ArticuloAvon } from "./ArticuloAvon";

@EntityRepository( ArticuloAvon )

export class CatalogoAvon extends Repository< ArticuloAvon >{

private logger = new Logger('CatalogoAvon');

//@param nuevoArticulo string

crearArticulo ()
{
    
}

}