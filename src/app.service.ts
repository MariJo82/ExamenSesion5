import { Injectable } from '@nestjs/common';
import { ArticuloDTO } from './DTO/articulo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CatalogoAvonRepository } from './CatalogoAvon.repositoy';

@Injectable()
export class AppService {
  
  constructor(
    @InjectRepository(CatalogoAvonRepository)
    private repository: CatalogoAvonRepository
  ) { }

  async obtenerTodo() {
    console.log('ask get')
        let response = this.repository.find({});
        return await response;
  }

  async obtenerUnArticulo(id: string) {
    console.log('ask get id ' + id)
        let response = this.repository.findOne(id);
        return await response;
    
  }

  async agregarUnArticulo(data: ArticuloDTO) {
    const news = await this.repository.crearArticulo(data);
        console.log(news);
        return 'Agregado';    
  }

  editarUnArticulo(id: string, data: ArticuloDTO): string {
    return 'Editado articulo id: ' + id;
  }

  eliminarUnArticulo(idArt: string): string {
    return 'Eliminado articulo id: ' + idArt;
  }

}
