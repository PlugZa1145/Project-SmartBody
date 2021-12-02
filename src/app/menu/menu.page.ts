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
      img: "https://lh3.googleusercontent.com/proxy/1lFkK09kIVR9K9V0Q56BFiiTX5w83jC7hC-wIDgMihaOu9y1meLpWRdpkj4roFPxeKJFPfXzUGYqRfp9bIK49ONUUucRmeFLm0QfOioxh8tZwNB_XUfK_0EwzTsE26EoZ6Z_sLAnH16bL5hX-zTWuGSDve7UKUCgdA",
      name: "Cardio",
      Link:"/cardio"
    },{
      img: "https://image.sistacafe.com/images/uploads/summary/image/1020/1443076680-Tea-Tree-Yoga.jpg",
      name: "Yoga",
      Link:"/yoga"
    },{
      img: "https://i0.wp.com/www.vrunvride.com/wp-content/uploads/2019/05/couple-gym-exercises.jpg?resize=750%2C533&ssl=1",
      name: "Aerobic & Anaerobic",
      Link:"/aerobic-anaerobic"
    },
    
  ]

}
