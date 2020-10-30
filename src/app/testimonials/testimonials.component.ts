import { TESTIMONIALCARD1, TESTIMONIALTABS, TESTIMONIALIMAGES, TESTIMONIALCARD2, TESTIMONIALCARD3 } from './testimonial-data';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TestimonialCard } from '../interface/interface';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class TestimonialsComponent implements OnInit {

  selectedIndex = 0;
  thisTabs: string[] = [];
  cardTitle = '';
  cardSubTitle = '';
  cardContent = '';
  thisImages: string[] = [];
  thisCard: TestimonialCard;
  foo = 'foo';

  constructor() { }

  ngOnInit(): void {
    this.thisImages = TESTIMONIALIMAGES;
    this.thisCard = {
      cardTitle: TESTIMONIALCARD1.cardTitle,
      cardSubTitle: TESTIMONIALCARD1.cardSubTitle,
      cardContent: TESTIMONIALCARD1.cardContent
    };
    this.assignData();
  }

  public assignData(): void {
    switch (this.selectedIndex) {
      case 0: {
        this.thisCard.cardTitle = TESTIMONIALCARD1.cardTitle;
        this.thisCard.cardSubTitle = TESTIMONIALCARD1.cardSubTitle;
        this.thisCard.cardContent = TESTIMONIALCARD1.cardContent;
        break;
      }
      case 1: {
        this.thisCard.cardTitle = TESTIMONIALCARD2.cardTitle;
        this.thisCard.cardSubTitle = TESTIMONIALCARD2.cardSubTitle;
        this.thisCard.cardContent = TESTIMONIALCARD2.cardContent;
        break;
      }
      case 2: {
        this.thisCard.cardTitle = TESTIMONIALCARD3.cardTitle;
        this.thisCard.cardSubTitle = TESTIMONIALCARD3.cardSubTitle;
        this.thisCard.cardContent = TESTIMONIALCARD3.cardContent;
        break;
      }
    }
  }

  public async nextStep(): Promise<void> {
    this.foo = '';
    await this.sleep(750);
    this.foo = 'foo';
    if (this.selectedIndex === 2) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex = this.selectedIndex + 1;
    }
    this.assignData();
    console.log(this.selectedIndex);
    console.log(this.thisCard);
  }

  public async previousStep(): Promise<void> {
    this.foo = '';
    await this.sleep(750);
    this.foo = 'foo';
    if (this.selectedIndex === 0) {
      this.selectedIndex = 2;
    } else {
      this.selectedIndex = this.selectedIndex - 1;
    }
    this.assignData();
    console.log(this.selectedIndex);
    console.log(this.thisCard);
  }
  public sleep(ms: number): any {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
