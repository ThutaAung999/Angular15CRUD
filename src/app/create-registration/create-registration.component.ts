import { Component } from '@angular/core';

@Component({
  selector: 'app-create-registration',
  templateUrl: './create-registration.component.html',
  styleUrls: ['./create-registration.component.scss']
})
export class CreateRegistrationComponent {
  public packages:string[]=["Monthly","Quarterly","Yearly"];
  public genders:string[]=["Male","Female"];
  public importantList:string[]=[

    'Toxix Fax reduction',
    'Energy and Endurance',
    'Building Lean Muscle',
    'Healthier Digestive System',
    'Sugar Carving Body',
    'Fitness'
  ];
}