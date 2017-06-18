import { Component } from '@angular/core';
import { zadaService } from './uslugi/zada.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers:[zadaService]

})
export class AppComponent { }
