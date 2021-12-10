import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiNotFoundResponse, ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { ArticuloDTO } from './DTO/articulo.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
 

  @Get()
  @ApiOperation({ summary: 'Devuelve todo el catalogo de Avon' })
  @ApiResponse({ status: 200, type: Array })
  async obtenerTodo() {
    return this.appService.obtenerTodo();
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Obtiene un articulo del catalogo de Avon' })
  @ApiParam({ name: 'id',description:'Es el id del articulo a encontrar' })
  @ApiNotFoundResponse({ description: 'No se encuentra el articulo' })
  async obtenerUnArticulo(@Param('id') id: string) {
    return this.appService.obtenerUnArticulo(id);
  }

  @Post()  
  @ApiOperation({ summary: 'Agrega un nuevo articulo' })
  @UsePipes(ValidationPipe)
  @ApiBody({ required: true, type: ArticuloDTO })
  async agregarUnArticulo(@Body() req: ArticuloDTO) {
    return this.appService.agregarUnArticulo(req );
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Edita el articulo indicado' })
  @ApiParam({ name: 'id',description:'Es el id del articulo a editar' })
  @ApiBody({ required: true, type: ArticuloDTO })
  @ApiNotFoundResponse({ description: 'No se encuentra el articulo' })
  async editarUnArticulo(@Param('id') id: string, @Body() req: ArticuloDTO) {
    return this.appService.editarUnArticulo(id, req);
  }

  @Delete('/:NombreProducto')
  @ApiOperation({ summary: 'Elimina el articulo indicado' })
  @ApiParam({ name: 'NombreProducto',description:'Es el nombre del articulo a eliminar' })
  @ApiNotFoundResponse({ description: 'No se encuentra el articulo' })
  eliminarUnArticulo(@Param('NombreProducto') nombreProducto: string) {
    return this.appService.eliminarUnArticulo(nombreProducto);
  }

}
