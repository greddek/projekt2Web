import { Component } from '@angular/core';
import { zadaService } from '../../uslugi/zada.service';
import {Zadania} from '../../../Zadania';

@Component({
  moduleId: module.id,
  selector: 'zadania',
  templateUrl: 'tasks.component.html'
})
export class ZadComponent {
      zadania: Zadania[];
      tytul: string;

    constructor(private zadService: zadaService){
        this.zadService.getZadania()
        .subscribe( zadania=>{
          this.zadania = zadania;
        });
    }

    addZadanie(event){
        event.preventDefault();
        var nZadanie = {
            tytul: this.tytul,
            JestGotowe: false
        }

        this.zadService.addZadanie(nZadanie)
            .subscribe(zadania => {
                this.zadania.push(zadania);
                this.tytul = '';
            });
    }
    deleteZad(id){
       var zadania = this.zadania;

       this.zadService.deleteZad(id).subscribe(data => {
           if(data.n == 1){
               for(var i = 0;i < zadania.length;i++){
                   if(zadania[i]._id == id){
                       zadania.splice(i, 1);
                   }
               }
           }
       });
   }
   updateStatus(zadania){
        var _task = {
            _id:zadania._id,
            tytul: zadania.tytul,
            JestGotowe: !zadania.JestGotowe
        };

        this.zadService.updateStatus(_task).subscribe(data => {
            zadania.JestGotowe = !zadania.JestGotowe;
        });
    }

}
