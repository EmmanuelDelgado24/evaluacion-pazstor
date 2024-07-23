import { Component} from '@angular/core';
import { responsabilidades } from '../../utils/data';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-responsabilidades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './responsabilidades.component.html',
  styleUrl: './responsabilidades.component.css'
})
export class ResponsabilidadesComponent {
  responsabilidades = responsabilidades; // Array of responsibility data

  constructor() {}
}
