import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/component/searchBox/searchBox.component';
import { Country } from '../../interfaces/country';
import {CountryService} from '../../services/country.service'
@Component({ 
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [SearchBoxComponent],
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {
  countries:Country[]=[];

  constructor(private countryService: CountryService){ }

  handleSearchTextChange(searchText: string) {
    console.log("Texto de búsqueda:", searchText);
    this.getByCapital(searchText);
  }
  getByCapital(capital:string){
    this.countryService.getByCapital(capital).subscribe(countries=>this.countries=countries);
  }
}