import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, ToastController} from 'ionic-angular';
import {Items} from "../../providers";

@IonicPage()
@Component({
  selector: 'news-feed',
  templateUrl: 'newsfeed.html'
})
export class NewsFeed {
  cardItems: any[];
  public press: number = 0;
  public likes: number = 10;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public items: Items, public toastCtrl: ToastController) {
    this.cardItems = [
      {
        user_avtar: 'assets/img/marty-avatar.png',
        user_name: 'Marty McFly',
        date: 'November 5, 1955',
        image: 'assets/img/advance-card-bttf.png',
        content: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.',
      },
      {
        user_avtar: 'assets/img/sarah-avatar.png.jpeg',
        user_name: 'Sarah Connor',
        date: 'May 12, 1984',
        image: 'assets/img/advance-card-tmntr.jpg',
        content: 'I face the unknown future, with a sense of hope. Because if a machine, a Terminator, can learn the value of human life, maybe we can too.'
      },
      {
        user_avtar: 'assets/img/ian-avatar.png',
        user_name: 'Dr. Ian Malcolm',
        date: 'June 28, 1990',
        image: 'assets/img/advance-card-jp.jpg',
        content: 'Your scientists were so preoccupied with whether or not they could, that they didn\'t stop to think if they should.'
      }
    ];
  }
  addNewsFeed() {
    let addModal = this.modalCtrl.create('NewsfeedCreate');
    addModal.onDidDismiss(item => {
      if (item) {
        console.log(item);
        this.cardItems.push(item);
      }
    })
    addModal.present();
  }
  dblClickEvent(ev,user_name) {
    this.press++;
    if (this.press == 2) {
      let toast = this.toastCtrl.create({
        message: "You have liked this.",
        duration: 2000,
        position: 'top'
      });
      toast.present();
      this.press = 0;
      this.likes++;
    }
  }
}
