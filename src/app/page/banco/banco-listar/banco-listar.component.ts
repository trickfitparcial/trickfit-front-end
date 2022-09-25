import { Component, OnInit } from '@angular/core';
import { Banco } from 'src/app/model/banco';
import { BancoService } from 'src/app/service/banco.service';
import { MatTableDataSource } from '@angular/material/table';
import { BancoDialogoComponent } from './banco-dialogo/banco-dialogo.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-banco-listar',
  templateUrl: './banco-listar.component.html',
  styleUrls: ['./banco-listar.component.css']
})
export class BancoListarComponent implements OnInit {
  lista: Banco[] = [];
  dataSource: MatTableDataSource<Banco> = new MatTableDataSource();
  displayedColumns: string[]=['id','nombre','acciones','accion2'];
  private idMayor: number = 0;
  constructor(private pService: BancoService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.pService.listar().subscribe(data => {
      this.dataSource=new MatTableDataSource(data);
    });
    this.pService.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.pService.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }

  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(BancoDialogoComponent);
  }


  eliminar(id: number) {
    this.pService.eliminar(id).subscribe(() => {
      this.pService.listar().subscribe(data => {
        this.pService.setLista(data);
      });
    });

    
  }
}

