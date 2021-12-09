import { Injectable } from '@nestjs/common';
import { ArticuloDTO } from './DTO/articulo.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  obtenerTodo(): string {
    return 'Todo!';
  }

  obtenerUnArticulo(id: string): string {
    return 'Obtener articulo id: ' + id;
  }

  agregarUnArticulo(data: ArticuloDTO): string {
    return 'Agregado!';
  }

  editarUnArticulo(id: string, data: ArticuloDTO): string {
    return 'Editado articulo id: ' + id;
  }

  eliminarUnArticulo(idArt: string): string {
    return 'Eliminado articulo id: ' + idArt;
  }
}
