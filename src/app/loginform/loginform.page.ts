import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.page.html',
  styleUrls: ['./loginform.page.scss'],
})
export class LoginformPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showpass = false;
  passtoggleicon = 'eye'

  functioniconshowpass(): void{
    this.showpass = !this.showpass;

    // console.log(this.showpass)

    if(this.passtoggleicon == 'eye'){
      this.passtoggleicon = 'eye-off';
    }
    else{
      this.passtoggleicon = 'eye';
    }


  }

}
