import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Pregunta } from 'src/app/module/pregunta';
import { PreguntaService } from 'src/app/service/pregunta.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
lista:Pregunta[]=[];
dataSource: MatTableDataSource<Pregunta>=new MatTableDataSource();
displayedColumns:string[]=["idPlanes","namePlan","detallesPlan","tiempoPlan","precioPlan"]
  constructor(private pService:PreguntaService) { }
//Instancia del servicio de planes 
  ngOnInit(): void {
    this.pService.listarPlanes().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
