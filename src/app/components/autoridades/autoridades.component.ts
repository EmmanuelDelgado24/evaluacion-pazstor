import { Component } from '@angular/core';
import { autoridades, } from '../../utils/data';

@Component({
  selector: 'app-autoridades',
  standalone: true,
  imports: [],
  templateUrl: './autoridades.component.html',
  styleUrl: './autoridades.component.css'
})
export class AutoridadesComponent {
  autoridades = autoridades;

  displayedColumns: string[] = ['autoridad'];
  dataSource = autoridades;

  constructor(){}
}
