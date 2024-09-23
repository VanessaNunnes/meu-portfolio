import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgClass],
  templateUrl: "app.component.html",
  styleUrl: "app.component.scss"
})
export class AppComponent { 
  public colapsarNavbar : boolean = false;



}
