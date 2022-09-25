import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Pregunta } from 'src/app/module/pregunta';
import { PreguntaService } from 'src/app/service/pregunta.service';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent implements OnInit {
lista:Pregunta[]=[];
dataSource:MatTableDataSource<Pregunta>=new MatTableDataSource();
displayedColumns:string[]=["idCita","namePaciente","fecha","Hora"]
constructor(private pService:PreguntaService) { }
//Instancia del servicio de citas 
  ngOnInit(): void {
    this.pService.listarCitas().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
