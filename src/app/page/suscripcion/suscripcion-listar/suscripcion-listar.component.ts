import { Component, OnInit } from '@angular/core';
import { Suscripcion } from 'src/app/model/suscripcion';
import { SuscripcionService } from 'src/app/service/suscripcion.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-suscripcion-listar',
  templateUrl: './suscripcion-listar.component.html',
  styleUrls: ['./suscripcion-listar.component.css']
})
export class SuscripcionListarComponent implements OnInit {
  lista: Suscripcion[] = [];
  dataSource: MatTableDataSource<Suscripcion> = new MatTableDataSource();
  displayedColumns: string[]=['id','usuario','fecha','idtarjeta'];
  constructor(private pService: SuscripcionService) { }

  ngOnInit(): void {
    this.pService.listar().subscribe(data => {
      this.dataSource=new MatTableDataSource(data);
    });
  }

}
