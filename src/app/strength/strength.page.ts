import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-strength',
  templateUrl: './strength.page.html',
  styleUrls: ['./strength.page.scss'],
})
export class StrengthPage implements OnInit {


  itemCollection: AngularFirestoreCollection<any>;
  items:any;



  constructor(private firestore: AngularFirestore,) {
    this.itemCollection = firestore.collection<any>('page-Strength');
    this.items = this.itemCollection.valueChanges();
  }


  ngOnInit() {
  }
  // x = [
  //   {
  //     img: "https://www.t-nation.com/wp-content/uploads/2019/06/5-Push-Ups-for-High-Performance.jpg",
  //     name: "Push Up",
  //     Link: "/push"
  //   }, {
  //     img: "https://www.bodybuilding.com/images/2018/december/one-tip-to-maximize-your-dumbbell-row-header-960x540.jpg",
  //     name: "Dumbbell Row",
  //     Link: "/dumbbell-row"
  //   }, {
  //     img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/how-to-tricep-dips-1597139585.jpg",
  //     name: "Tricep Dips",
  //     Link: "/tricep"
  //   }, {
  //     img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/701/articles/2015/12/54-stepups-1515613864.jpg",
  //     name: "Step Ups",
  //     Link: "/step-ups"
  //   },
  //   {
  //     img: "https://betterme.world/articles/wp-content/uploads/2020/07/shutterstock_1776379388-740x494.jpg",
  //     name: "Squats",
  //     Link: "/squats"
  //   },
  //   {
  //     img: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/06/Lunge_Fitness_Track_Female-1296x728-Header-1296x728.jpg?w=1155&h=1528",
  //     name: "Walking lunges",
  //     Link: "/walking"
  //   },
  // ]

}

