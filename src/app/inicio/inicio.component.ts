import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../services/service.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  data:any = [];
  nit:any = [];

  constructor(private _homeservice:ServiceService) { }

  ngOnInit(): void {
  /*  this._homeservice.getHome(this.nit)
    .subscribe((res:any) => {
      this.data = res;
    });*/

    this.data={"_id":"60ce101a06b24b4483ac8acc","nit":"800220154","nombre":"Flotas la Macarena","capa":"Oro","segmento":"A","gerenteRelacion":"Carlos Gómez"}
  }

}