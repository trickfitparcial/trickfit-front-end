import { Component, OnInit } from '@angular/core';
import { Registroalimenticio } from 'src/app/model/registroalimenticio';
import { RegistroalimenticioService } from 'src/app/service/registroalimenticio.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-registroalimenticio-listar',
  templateUrl: './registroalimenticio-listar.component.html',
  styleUrls: ['./registroalimenticio-listar.component.css']
})
export class RegistroalimenticioListarComponent implements OnInit {
  lista: Registroalimenticio[] = [];
  dataSource: MatTableDataSource<Registroalimenticio> = new MatTableDataSource();
  displayedColumns: string[]=['usuario','alimento'];
  constructor(private pService: RegistroalimenticioService) { }

  ngOnInit(): void {
    this.pService.listar().subscribe(data => {
      this.dataSource=new MatTableDataSource(data);
    });
  }

}
