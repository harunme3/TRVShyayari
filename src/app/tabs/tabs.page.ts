import { AngularFirestore } from '@angular/fire/firestore';
import { Component, ViewChild } from '@angular/core';
import firebase from 'firebase/app';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  showForm: boolean = false;
  isEditing: boolean = false;
  flag: number;
  Shayari: string;
  Shayaries: any[] = [];
  data: any = [];
  data_author: any = [];
  data_update: any = [];

  selected_option: string;
  @ViewChild('slidingList', { static: false }) slidingList;

  constructor(
    private af: AngularFirestore,
    private alertController: AlertController,
  ) {}

  ngOnInit(): void {
    this.data = [
      'Aankhen Shayari',
      'Aansu Shayari',
      'Aitbaar Shayari',
      'Ajnabi Shayari',
      'Alone Shayari',
      'Anniversary Shayari',
      'Apnapan Shayari',
      'April Fool Shayari',
      'Army Shayari',
      'Arzoo Justajoo Shayari',
      'Asqi',
      'Attitude Shayari',
      'Bakra Eid Shayari',
      'Basant Panchami Shayari',
      'Best Shayari',
      'Bewafa Shayari',
      'Bhaiya Dooj Shayari',
      'Bhojpuri Shayari',
      'Bhool Shayari',
      'Birthday Shayari',
      'Breakup Shayari',
      'Chahat Shayari',
      'Chand Sitare Shayari',
      "Children's Day Shayari",
      'Chocolate Day Shayari',
      'Christmas Day Shayari',
      'Computer Shayari',
      'Cool Shayari',
      'Corona Shayari',
      'Couple Shayari',
      'Cute Shayari',
      'Dard Shayari',
      "Daughter's Day Shayari",
      'Decent Shayari',
      'Desh Bhakti Shayari',
      'Dhanteras Shayari',
      'Dhoka Shayari',
      'Dil Shayari',
      'Diwali Shayari',
      'Dussehra Shayari',
      'Dosti Shayari',
      'Double meaning',
      'Dua Shayari',
      'Durga Ashtami Shayari',
      'Ehsaas Shayari',
      'Eid Shayari',
      'Election Shayari',
      'Emotional Shayari',
      "Engineer's Day Shayari",
      'English Poetry Shayari',
      'Famous Shayari',
      "Farmer's Day Shayari",
      "Father's Day Shayari",
      'Festivals Shayari',
      'Flirt Shayari',
      'Fool Shayari',
      'Friendship Shayari',
      'Friendship Day Shayari',
      'Funny Shayari',
      'Ganesh Chaturthi Shayari',
      'Get well soon Shayari',
      'Gam Shayari',
      'Girlfriend Boyfriend Shayari',
      'Good Evening Shayari',
      'Good Morning Shayari',
      'Good Night Shayari',
      'Good afternoon Shayari',
      'Good luck',
      'Gudi Padwa Shayari',
      'Guru Purnima Shayari',
      'Hariyali Teej Shayari',
      'Heart Touching Shayari',
      'Hindi Diwas Shayari',
      'Holi Shayari',
      'Hug Day Shayari',
      'Independence Day Shayari',
      'Interesting Shayari',
      'Karbala Shayari',
      'Karwa Chauth Shayari',
      'Kashmiri Shayari',
      'Khushboo Shayari',
      'Kiss Shayari',
      'Kiss Day Shayari',
      'Krishna Janmashtami Shayari',
      'Love Shayari',
      'Maha Navami Shayari',
      'Maha Shivaratri Shayari',
      'Mahila Sangeet Shayari',
      'Mehfil Muhabbat Shayari',
      'Missing you Shayari',
      "Mother's Day Shayari",
      'Motivational Shayari',
      'Muharram Shayari',
      'Nag Panchami Shayari',
      'Narazgi Roothna Shayari',
      'Naseeb Qismat Shayari',
      'Naughty Shayari',
      'Navaratri Shayari',
      'Nazar Shayari',
      'New Year Shayari',
      'Nimari Shayari',
      'Painful Shayari',
      'Phool Kaante Shayari',
      'Politics Shayari',
      'Positive Shayari',
      'Promise Day Shayari',
      'Propose Day Shayari',
      'Punjabi Shayari',
      'Pyar Shayari',
      'Rajasthani Shayari',
      'Raksha Bandhan Shayari',
      'Rama Navami Shayari',
      'Ramadan Shayari',
      'Random Shayari',
      'Relations Shayari',
      'Relationship Shayari',
      'Republic Day Shayari',
      'Romantic Shayari',
      'Rose Day Shayari',
      'SMS Shayari',
      'Sad Shayari',
      'Sardarji',
      'Shaheed Diwas Shayari',
      'Sharaab Shayari',
      'Sharabi Shayari',
      'Shaurya Diwas Shayari',
      'Smile Shayari',
      'Sorry Shayari',
      'Tanhai Shayari',
      'Taunting Shayari',
      'Teachers Day Shayari',
      'Technical Shayari',
      'Teddy Day Shayari',
      'Top Shayari',
      'Touching Shayari',
      'Trending Shayari',
      'Tribute Shayari',
      'Truck Shayari',
      'TwoLine Shayari',
      'Ultimate Shayari',
      'Urdu Shayari',
      "Valentine's Day Shayari",
      'Victory Shayari',
      'Vijay Diwas Shayari',
      'Viral Shayari',
      'Wedding Shayari',
      'Welcome Shayari',
      'Whatsapp Shayari',
      "Women's Day Shayari",
      'Yaad Shayari',
      'Zakham Shayari',
      'Zindagi Shayari',
    ];

    this.data_author = [
      'Ahmad Faraz',
      'Ali Zaryoun',
      'Ammar Iqbal',
      'Anamika Amber',
      'Anjum Rehbar',
      'Ankita Singh',
      'Ansh Pandit',
      'Arunendra Kumar',
      'Chetna Balhara',
      'Dr Bashir Badr',
      'Faiz Ahmad Faiz',
      'Gulzar',
      'Jaun Eliya',
      'Kanha Kamboj',
      'Kumar Vishwas',
      'Meer Taqi Meer',
      'Mirza Ghalib',
      'Mo Imran Pratapgarhi',
      'Momin Khan Momin',
      'Munawwar Rana',
      'Naseerturabi',
      'Nida Fazli',
      'Nidhi Nagrwal',
      'Rahat Indori',
      'Shabeena Adeeb',
      'Shakeel Azmi',
      'Shakeel Badayuni',
      'Tahzeeb Hafi',
      'Vabby',
      'Waseem Barelvi',
      'Wasi Shah',
      'Yogesh Kumar',
      'Zubair Ali Tabish',
    ];
    this.data_update = ['Update Daily Shayari'];
  }


  delete(index) {
    this.slidingList.closeSlidingItems();
    console.log('this.Sha :>> ', this.Shayaries[index]);
    this.Shayaries.splice(index, 1);
  }

  edit(item, index) {
    this.isEditing = true;
    this.slidingList.closeSlidingItems();
    this.showForm = true;
    this.Shayari = item;
    this.flag = index;
  }

  push() {
    this.showForm = !this.showForm;

    if (this.isEditing) {
      this.Shayaries[this.flag] = this.Shayari;
      this.isEditing = false;
    } else {
      this.Shayaries.push(this.Shayari);
    }

    this.Shayari = '';
  }

  addItem(): void {
    this.slidingList.closeSlidingItems();
    this.showForm = !this.showForm;
  }

  commit(select) {
    if (this.Shayaries.length == 15 && select) {
      let trimedcollection = select.trim();
      this.af
        .collection(trimedcollection)
        .add({
          time: firebase.firestore.FieldValue.serverTimestamp(),
          data: this.Shayaries,
        })
        .then((res) => {
          this.presentAlert(
            'Congatulation',
            'You have been successfully submiited your Shayari data'
          );
        });
    } else {
      this.presentAlert(
        'Ohhoo',
        'make sure your data length is equal to 10 and collection must be selected'
      );
    }
  }

  async presentAlert(h, m) {
    const alert = await this.alertController.create({
      header: h,
      mode: 'ios',
      message: m,
      buttons: ['OK'],
    });

    await alert.present();
  }




}
