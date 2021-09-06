import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

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
