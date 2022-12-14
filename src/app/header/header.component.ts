import { Component, Output, EventEmitter } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private dsService: DataStorageService) {
  }
  onSaveData() {
    this.dsService.storeRecipes();
  }
  onFetchData() {
    this.dsService.fetchRecipes();
  }
}
