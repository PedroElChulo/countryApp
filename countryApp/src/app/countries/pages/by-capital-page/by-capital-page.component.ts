import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/component/search-box/search-box.component';

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [SearchBoxComponent],
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {
  searchTerm: string = '';

  handleSearchTextChange(searchText: string) {
    this.searchTerm = searchText;
    console.log('Texto de búsqueda:', searchText);
    // Aquí puedes realizar acciones adicionales, como llamar a un servicio para buscar datos, etc.
  }
}