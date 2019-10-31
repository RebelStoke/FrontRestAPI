import { Component, OnInit } from '@angular/core';
import {PetService} from '../pet.service';
import { faCat, faDragon, faSpider } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  faCat = faCat;
  faDragon = faDragon;
  faSpider = faSpider;
  constructor(private petService: PetService) { }

  ngOnInit() {
  }

}
