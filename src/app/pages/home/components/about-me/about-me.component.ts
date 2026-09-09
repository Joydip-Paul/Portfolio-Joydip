import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api/api.service';
import {SubSink} from 'subsink';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  private subs = new SubSink();

  constructor(private Api: ApiService) { }

  ngOnInit(): void {
    // this.getAllCitiesData();
    this.getAllCitiesApi();
  }

  // getAllCitiesData() {
  //   this.subs.sink = this.citiesApi.getAllCities().subscribe((response)=>{
  //     console.log(response);
  //   })
  // }

  
  getAllCitiesApi(){
    this.subs.sink = this.Api.citiesApi().subscribe(res=>{
      console.log(res);
    })
  }

}
