import { Component } from '@angular/core';
import { SelectorComponent } from '../ui/selector/selector.component';
import { perfil } from '../../utils/data';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [SelectorComponent],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
 perfil = perfil;

 constructor(){}
}
