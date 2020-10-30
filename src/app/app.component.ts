import { AfterViewInit } from '@angular/core';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { fadeAnimation } from './animations';
import { HandleErrorService } from './service/handle-error.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation] // register the animation
})
export class AppComponent implements AfterViewInit {
  backgroundClass = "home"
  title = 'DanWilliamsWebsite';

  constructor(private cdr: ChangeDetectorRef, private handleErrorService: HandleErrorService) {
  }

  public ngAfterViewInit() {
    // this.handleErrorService.errorOutput.subscribe(x => {
    //   this.backgroundClass = "error";
    //   this.cdr.detectChanges();
    // });
  }
  // public updateHome() {
  //   this.backgroundClass = "home"
  // }
  // public updateBiography() {
  //   this.backgroundClass = "biography"
  // }
  // public updateLessons() {
  //   this.backgroundClass = "lessons"
  // }
  // public updateMedia() {
  //   this.backgroundClass = "media"
  // }
  // public updateTestimonials() {
  //   this.backgroundClass = "testimonials"
  // }
  // public updateContact() {
  //   this.backgroundClass = "contact"
  // }
}
