import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {
  @Output() onAddPet = new EventEmitter();

  breed: string;
  url: string;
  description: string;
  favorite: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const newPet = {
      breed: this.breed,
      url: this.url,
      description: this.description,
      favorite: this.favorite
    }

    this.onAddPet.emit(newPet);

    this.breed = "";
    this.url = "";
    this.description = "";
  }

}
