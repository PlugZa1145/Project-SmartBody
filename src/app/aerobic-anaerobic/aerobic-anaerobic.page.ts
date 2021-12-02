import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aerobic-anaerobic',
  templateUrl: './aerobic-anaerobic.page.html',
  styleUrls: ['./aerobic-anaerobic.page.scss'],
})
export class AerobicAnaerobicPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  x = [
    {
      img: "https://i0.wp.com/www.vrunvride.com/wp-content/uploads/2019/05/running-run-aerobic.jpg?w=700&ssl=1" ,
      name: "Aerobic",
      Link:"/aerobic"
    },{
      img: "https://i0.wp.com/www.vrunvride.com/wp-content/uploads/2019/05/women-weight-training-anaerobic.jpg?w=700&ssl=1",
      name: "Anaerobic",
      Link:"/anaerobic"
    },{
    img: "https://i1.wp.com/www.vrunvride.com/wp-content/uploads/2019/05/weight-training-anaerobic.jpg?w=700&ssl=1",
      name: "สรุปแบบไหนดีกว่ากัน",
      Link:"/end-aerobic-anaerobic"
    },
    
  ]

}

