import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-yoga',
  templateUrl: './yoga.page.html',
  styleUrls: ['./yoga.page.scss'],
})
export class YogaPage implements OnInit {

  itemCollection: AngularFirestoreCollection<any>;
  items:any;



  constructor(private firestore: AngularFirestore,) {
    this.itemCollection = firestore.collection<any>('page-Yoga');
    this.items = this.itemCollection.valueChanges();
  }

  ngOnInit() {
  }
  // x = [
  //   //{
  //     //img: "https://i1.wp.com/www.fitmesport.com/wp-content/uploads/2020/08/Downward-Facing-Dog.jpg" ,
  //     nme: "Downward Facing Dog",
  //     Link:"/downward"
  //   },{
  //     img: "https://i1.wp.com/www.fitmesport.com/wp-content/uploads/2020/08/Warrior-Pose-2.jpg",
  //     name: "Warrior Pose",
  //     Link:"/warrior"
  //   },{
  //     img: "https://i1.wp.com/www.fitmesport.com/wp-content/uploads/2020/08/Tree-Pose-2.jpg",
  //     name: "Triangle Pose",
  //     Link:"/tree"
  //   },{
  //     img: "https://i1.wp.com/www.fitmesport.com/wp-content/uploads/2020/08/triangle-pose.jpg",
  //     name: "Triangle Pose",
  //     Link:"/triangle"
  //   },
  //   {
  //     img: "https://i1.wp.com/www.fitmesport.com/wp-content/uploads/2020/08/Bridge-Pose-3.jpg",
  //     name: "Bridge Pose",
  //     Link:"/bridge"
  //   },
  //   {
  //     img: "https://i1.wp.com/www.fitmesport.com/wp-content/uploads/2020/08/Cobra-pose.jpg",
  //     name: "Cobra Pose",
  //     Link:"/cobra"
  //   },
  // ]

}
