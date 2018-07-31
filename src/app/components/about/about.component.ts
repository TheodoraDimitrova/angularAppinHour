import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  name:string
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  isEdit: boolean = false;
  constructor() { }

  ngOnInit() {
    this.name="Teddyna"
    this.age = 28;
    this.email = "teddybear901@abv.bg";
    this.address = {
      street: "G-n Derojinski 83",
      city: "Gabrovo",
      postCode: 3500
    };
    this.hobbies = ["Shopping", "Traveling", "Sea Holidays", "Friend Ships"];
  }
  onClick() {}
  
  addHobby(hobby) {
    this.hobbies.unshift(hobby);
    return false;
  }
  delHobby(hobby) {
    for (let index = 0; index < this.hobbies.length; index++) {
      if (this.hobbies[index] == hobby) {
        this.hobbies.splice(index, 1);
      }
    }
  }
  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

}

interface Address {
  street: string;
  city: string;
  postCode: number;
}
