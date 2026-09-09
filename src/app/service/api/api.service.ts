import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  allCitiesApi:string = "https://freeapi.miniprojectideas.com/api/Annadata/GetAllCities";

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  // getAllCities():Observable<any[]>{
  //   return this.http.get<any[]>(this.allCitiesApi).pipe(map(res=>res))
  // }




citiesApi():Observable<any[]>{
  return this.http.get<any[]>(this.allCitiesApi).pipe(map(res => res));
}




 
}
