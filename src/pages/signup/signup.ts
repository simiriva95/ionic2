import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { User } from '../../providers';
import { FirstRunPage } from '../';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  account: { name: string, email: string, password: string,number:string,myDate:string, gender:string} = {
    name: '',
    email: '',
    password: '',
    number:'',
    myDate:'MM/DD/YYYY',
    gender:'m'
  };

  // Our translated text strings
  private signupErrorString: string;
  constructor(public navCtrl: NavController, public user: User, public toastCtrl: ToastController, public translateService: TranslateService) {
    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })
  }

  doSignup() {
    // Attempt to login in through our User service
    this.user.signup(this.account).subscribe((resp) => {
      this.navCtrl.push(FirstRunPage);
    }, (err) => {
      this.navCtrl.push(FirstRunPage);
      // Unable to sign up
      let toast = this.toastCtrl.create({
        message: "You have successfully signed up . Please sign in .",//this.signupErrorString
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
  welcomePage(){
    this.navCtrl.push('WelcomePage');
  }
}
