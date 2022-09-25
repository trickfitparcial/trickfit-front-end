import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registroalimenticio',
  templateUrl: './registroalimenticio.component.html',
  styleUrls: ['./registroalimenticio.component.css']
})
export class RegistroalimenticioComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
