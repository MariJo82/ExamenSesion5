import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ArticuloDTO } from './DTO/articulo.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
 

  @Get()
  obtenerTodo(): string {
    return this.appService.obtenerTodo();
  }

  @Get('/:id')
  obtenerUnArticulo(@Param('id') id: string): string {
    return this.appService.obtenerUnArticulo(id);
  }

  @Post()
  //@UsePipes(ValidationPipe)
  agregarUnArticulo(@Body() req: ArticuloDTO): string {
    return this.appService.agregarUnArticulo(req );
  }

  @Patch('/:id')
  editarUnArticulo(@Param('id') id: string, @Body() req: ArticuloDTO): string {
    return this.appService.editarUnArticulo(id, req);
  }

  @Delete('/:id')
  eliminarUnArticulo(@Param('id') id: string): string {
    return this.appService.eliminarUnArticulo(id);
  }

}
