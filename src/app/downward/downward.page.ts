import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-downward',
  templateUrl: './downward.page.html',
  styleUrls: ['./downward.page.scss'],
})
export class DownwardPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  x = [
    {
      img: "http://women.mthai.com/app/uploads/2015/12/yoka-8-600x408.jpg",
      name: "cadio",
      id: "1"
    },{
      img: "http://women.mthai.com/app/uploads/2015/12/yoka-8-600x408.jpg",
      name: "strang",
      id: "2"
    },{
      img: "http://women.mthai.com/app/uploads/2015/12/yoka-8-600x408.jpg",
      name: "yoga",
      id: "3"
    },{
      img: "http://women.mthai.com/app/uploads/2015/12/yoka-8-600x408.jpg",
      name: "acvance",
      id: "4"
    },
  ]

}