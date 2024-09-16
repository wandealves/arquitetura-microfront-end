import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nabbar.component.html',
  styleUrl: './nabbar.component.css',
})
export class NavbarComponent {}
