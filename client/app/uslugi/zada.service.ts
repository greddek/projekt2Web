import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class zadaService{

  constructor(private http:Http){
       console.log('Inicjalizacja Uslug ziom...');
   }
   getZadania(){
        return this.http.get('/api/zadania')
            .map(res => res.json());
    }
    addZadanie(nZadanie){
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post('/api/zad', JSON.stringify(nZadanie), {headers: headers})
          .map(res => res.json());

    }

    deleteZad(id){
        return this.http.delete('/api/zad/'+id)
            .map(res => res.json());
    }

    updateStatus(zadania){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/zad/'+zadania._id, JSON.stringify(zadania), {headers: headers})
            .map(res => res.json());
    }

}
