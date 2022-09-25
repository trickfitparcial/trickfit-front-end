import { Component, OnInit } from '@angular/core';
import { Pregunta } from 'src/app/module/pregunta';
import { PreguntaService } from 'src/app/service/pregunta.service';
import { MatTableDataSource} from '@angular/material/table'

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {
  lista:Pregunta[]=[];
  dataSource:MatTableDataSource<Pregunta> = new MatTableDataSource();
  displayedColumns:string[]=["idInfo","peso","nivelRutina","talla","edad","riesgo"]
  constructor(private pService:PreguntaService) { }
//Instancia del servicio de informacion del cliente
  ngOnInit(): void {
    this.pService.listarInfo().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
