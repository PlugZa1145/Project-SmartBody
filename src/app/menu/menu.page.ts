import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  x = [
    {
      img: "https://s.isanook.com/me/0/rp/r/w850/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL21lLzAvdWQvNy8zNTU0NS9kdW1iYmVsbC5qcGc=.jpg" ,
      name: "Strength",
      Link:"/strength"
    },{
      img: "https://image.sistacafe.com/images/uploads/summary/image/1020/1443076680-Tea-Tree-Yoga.jpg",
      name: "Yoga",
      Link:"/yoga"
    },
    {
      img: "https://thebodychallenge.in.th/wp-content/uploads/2020/10/Cardio-VS-HIIT-%E0%B8%AD%E0%B8%AD%E0%B8%81%E0%B8%81%E0%B8%B3%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A2%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B9%84%E0%B8%AB%E0%B8%99%E0%B9%80%E0%B8%9A%E0%B8%B4%E0%B8%A3%E0%B9%8C%E0%B8%99%E0%B8%81%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%81%E0%B8%B1%E0%B8%99-scaled.jpg",
      name: "Cardio",
      Link:"/cardio"
    },{
      img: "https://i0.wp.com/www.vrunvride.com/wp-content/uploads/2019/05/couple-gym-exercises.jpg?resize=750%2C533&ssl=1",
      name: "Aerobic & Anaerobic",
      Link:"/aerobic-anaerobic"
    },
    
  ]

}
