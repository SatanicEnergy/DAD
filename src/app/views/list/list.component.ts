import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/app/shared/services/load-scripts.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private img: LoadScriptsService) { 
    img.Load(["slider"]);
  }

  ngOnInit(): void {
  }

}
