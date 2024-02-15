import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchBox',
  standalone: true,
  imports: [],
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {
  searchText: string = '';
  @Output() searchTextChange: EventEmitter<string> = new EventEmitter<string>();

  onSearchInputChange() {
    this.searchTextChange.emit(this.searchText);
  }
}