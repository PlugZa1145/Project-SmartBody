import { JitSummaryResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yoga',
  templateUrl: './yoga.page.html',
  styleUrls: ['./yoga.page.scss'],
})
export class YogaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  x = [
    {
      img: "https://i1.wp.com/www.fitmesport.com/wp-content/uploads/2020/08/Downward-Facing-Dog.jpg" ,
      name: "Downward Facing Dog",
      Link:"/downward"
    },{
      img: "https://i1.wp.com/www.fitmesport.com/wp-content/uploads/2020/08/Warrior-Pose-2.jpg",
      name: "Warrior Pose",
      Link:"/warrior"
    },{
      img: "https://i1.wp.com/www.fitmesport.com/wp-content/uploads/2020/08/Tree-Pose-2.jpg",
      name: "Triangle Pose",
      Link:"/tree"
    },{
      img: "https://i1.wp.com/www.fitmesport.com/wp-content/uploads/2020/08/triangle-pose.jpg",
      name: "Triangle Pose",
      Link:"/triangle"
    },
    {
      img: "https://i1.wp.com/www.fitmesport.com/wp-content/uploads/2020/08/Bridge-Pose-3.jpg",
      name: "Bridge Pose",
      Link:"/bridge"
    },
    {
      img: "https://i1.wp.com/www.fitmesport.com/wp-content/uploads/2020/08/Cobra-pose.jpg",
      name: "Cobra Pose",
      Link:"/cobra"
    },
  ]

}
