import { Component, OnInit } from '@angular/core';
import { Pregunta } from 'src/app/model/pregunta';
import { PreguntaService } from'src/app/service/pregunta.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-pregunta-listar',
  templateUrl: './pregunta-listar.component.html',
  styleUrls: ['./pregunta-listar.component.css']
})
export class PreguntaListarComponent implements OnInit {
  lista: Pregunta[] = [];
  dataSource: MatTableDataSource<Pregunta> = new MatTableDataSource();
  displayedColumns: string[]=['id','titulo','rpta'];
  constructor(private pService: PreguntaService) { }

  ngOnInit(): void {
    this.pService.listar().subscribe(data => {
      this.dataSource=new MatTableDataSource(data);
    });
  }

}
