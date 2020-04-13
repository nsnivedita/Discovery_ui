import { Component, ViewChild } from '@angular/core';
import {Planet} from 'src/app/models/planet';
import { Subject } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { DataService } from './services/data.service';
import { Path } from './models/path';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  oppoSuits: any = ['Men', 'Women', 'Boys', 'Inspiration']
  title = 'discovry-ui';
  sourcePlanet: any ;
  destinationPlanet: any;
  planetlist: any;
  planets :Planet[];
  planet:any;
  path: string;
  paths: Path;
  displayData: boolean;
  constructor(public fb: FormBuilder,private dataService: DataService) {
    console.log(this.findSource.value +  ""+ this.findDestination.value)
   }
   ngOnInit() {
    this.dataService.findAll().subscribe(data=>{
      this.planets=data;
      this.planetlist = this.planets.map(a => a.planet_name); 
     this.sourcePlanet = this.planets.map(a => a.planet_name);
      this.destinationPlanet = this.planets.map(a => a.planet_name);
      this.displayData=false;
      }
    )
   
  }

  findSource = this.fb.group({
    sourcePlanetname:['']
    
  })
  findDestination = this.fb.group({
    
    destinationPlanetname:['']
  })

  

  findShortestDistance() {
    console.log(this.findSource.value.sourcePlanetname +  " "+ this.findDestination.value.destinationPlanetname)
    let paths = new Path('A',this.findSource.value.sourcePlanetname,'',this.findDestination.value.destinationPlanetname,null);

    this.dataService.findDirection(paths).subscribe(data=>{
      this.planet=data.path});
      this.displayData=true;
}


}