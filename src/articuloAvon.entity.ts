import { BaseEntity, Entity, Column, ObjectIdColumn} from "typeorm";

@Entity()

export class articuloAvonEntity extends BaseEntity{

    @ObjectIdColumn()
    _id: string;

    @Column()
    nombreProducto: string;

    @Column()
    descripcion: string;

    @Column()
    precio: number;

    @Column()
    lugarCompra: string;

    @Column()
    fechaCreacion: Date;

}