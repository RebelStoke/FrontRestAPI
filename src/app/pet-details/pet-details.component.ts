import { Component, OnInit } from '@angular/core';
import {PetService} from '../pet.service';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import {Pet} from '../pet';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {
pet: Pet;
id: number;
  constructor(private petService: PetService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.getPet();
  }

  getPet(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.id = id.valueOf();
    this.petService.getPet(id)
      .subscribe(pet => this.pet = pet);
  }
  save(): void {
   console.log(this.pet);
   this.petService.updatePet(this.id, this.pet);
  }
  goBack(): void {
    this.location.back();
  }

}
