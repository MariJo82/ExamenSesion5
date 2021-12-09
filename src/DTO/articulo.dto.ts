import { IsNotEmpty, IsOptional, IsEnum, ValidateNested, IsString, IsNumber } from 'class-validator';

export class ArticuloDTO {
 
    @IsNotEmpty()
    nombreProducto: string;
    descripcion: string;
    precio: number;
    lugarCompra: string;
    fechaCreacion: Date;
}