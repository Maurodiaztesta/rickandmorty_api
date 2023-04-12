import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  paginaActual: number = 1;

  @Output() emitPage = new EventEmitter()

  changePage(newPage:number){
    this.paginaActual = newPage;
    this.emitPage.emit(this.paginaActual)
  }
}
