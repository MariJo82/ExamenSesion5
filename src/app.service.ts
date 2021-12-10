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
        return 'Artículo Agregado';    
  }

  async editarUnArticulo(id: string, data: ArticuloDTO) {
    
        await this.repository.update(id, data);
    
    return 'Artículo Editado';   
  }

  
  async eliminarUnArticulo(NombreProducto:string) {
        console.log('Eliminar un artículo');
        let response = await this.repository.deleteOne({nombreProducto:NombreProducto}) ;
        return 'Artículo eliminado';
  }

}
