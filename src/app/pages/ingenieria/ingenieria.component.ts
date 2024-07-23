import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from '../../layouts/layout/layout.component';
import { ContainerComponent } from '../../layouts/container/container.component';
import { HeaderComponent } from '../../components/header/header.component';


@Component({
  selector: 'app-ingenieria',
  standalone: true,
  imports: [HeaderComponent, LayoutComponent, ContainerComponent, RouterOutlet],
  templateUrl: './ingenieria.component.html',
  styleUrl: './ingenieria.component.css'
})
export default class IngenieriaComponent {

}
