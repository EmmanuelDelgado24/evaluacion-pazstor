import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DATA } from '../../../utils/data';

@Component({
  selector: 'app-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './selector.component.html',
})
export class SelectorComponent {

  data = input(); 

  constructor(){}
}
