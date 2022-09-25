import { Component, OnInit } from '@angular/core';
import { Cita } from 'src/app/model/cita';
import { CitaService } from 'src/app/service/cita.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cita-listar',
  templateUrl: './cita-listar.component.html',
  styleUrls: ['./cita-listar.component.css']
})
export class CitaListarComponent implements OnInit {
  lista: Cita[] = [];
  dataSource: MatTableDataSource<Cita> = new MatTableDataSource();
  displayedColumns: string[]=['id','usuario','fecha','hora'];
  constructor(private pService: CitaService) { }

  ngOnInit(): void {
    this.pService.listar().subscribe(data => {
      this.dataSource=new MatTableDataSource(data);
    });
  }

}
