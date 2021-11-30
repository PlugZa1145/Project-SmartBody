import { JitSummaryResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardio',
  templateUrl: './cardio.page.html',
  styleUrls: ['./cardio.page.scss'],
})
export class CardioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  x = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkzAxR4ajEzdW69FY-zfjhI9D33CSu_Etf9Q&usqp=CAU",
      name: "Burpees",
      Link:"/burpees"
    },{
      img: "https://www.bodybuilding.com/fun/images/2015/high-intensity-interval-training-the-ultimate-guide-facebook-960x540.jpg",
      name: "High-Intensity Interval",
      Link:"/high-intensity"
    },{
      img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/russian-twist-sharpened-1548270008.jpg",
      name: "Russian Twist",
      Link:"/russian"
    },{
      img: "https://cdn.shopify.com/s/files/1/2027/3795/articles/Glute_Bridge_with_a_Band_1024x.jpg?v=1598605021",
      name: "Glute Bridge",
      Link:"/glute"
    },
    {
      img: "https://www.healthshots.com/wp-content/uploads/2020/06/High-knees.jpg",
      name: "High Knees",
      Link:"/high"
    },
    {
      img: "https://cdn9.classpass.com/fitness-library/movements/high-kick/images/description.jpg",
      name: "High Kicks",
      Link:"/highkicks"
    },
  ]

}
