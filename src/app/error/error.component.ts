import { Component, OnInit } from '@angular/core';
import { HandleErrorService } from '../service/handle-error.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  constructor(private handleErrorService: HandleErrorService) { }

  ngOnInit(): void {
    this.handleErrorService.updateErrorBackground();
  }

}
