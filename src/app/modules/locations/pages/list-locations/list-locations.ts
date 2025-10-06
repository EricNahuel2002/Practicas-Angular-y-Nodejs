import { Component, inject, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { LocationService } from '../../../../api/api-rick/location/location.service';
import { Location } from '../../interfaces/location.interface';

@Component({
  selector: 'app-list-locations',
  imports: [TableModule],
  templateUrl: './list-locations.html',
  styleUrl: './list-locations.css'
})
export class ListLocations implements OnInit {

  locationService = inject(LocationService);

  locations: Location[] = [];

  ngOnInit(): void {
    this.ListLocations();
  } 


  ListLocations(){
    this.locationService.getLocations().subscribe({
      next : (data) => {
        this.locations = data;
        console.log(data);
      },
      error: (err) => console.log(err),
      complete: () => console.log('completed')
    })
  }


}
