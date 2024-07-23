import { Component, OnInit } from '@angular/core';
import { FlowbiteService } from '../../services/flowbite.service';
import { SelectorComponent } from '../ui/selector/selector.component';
import { datos } from '../../utils/data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-generales',
  standalone: true,
  imports: [SelectorComponent, CommonModule],
  templateUrl: './generales.component.html',
  styleUrl: './generales.component.css'
})
export class GeneralesComponent implements OnInit {  
  displayedColumns: string[] = ['key', 'value'];
  datos = datos;

  constructor(private flowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite(flowbite => {
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });
  }
}