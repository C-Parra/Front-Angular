import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../../services/categorias.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent implements OnInit{

  categorias: any;
  arrCategorias: any;
  constructor(private _categorias: CategoriasService) {}

  ngOnInit(): void {
    this.getCategorias();

  }

    getCategorias(){

      this._categorias.getCategorias()
              .subscribe ( (respuesta:any) => {
                  this.categorias = respuesta;
                  this.arrCategorias = this.categorias.categoriaResponse.categoria;
                  console.log( this.arrCategorias);
              })
    }
  

}
