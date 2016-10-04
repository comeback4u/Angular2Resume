/**
 * Created by smartSense on 01/10/16.
 */
import {InMemoryDbService} from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    // let resumes = [
    //   {
    //       id: 1,
    //       name: "Ronak Thacker",
    //       imagePath: "https://lh4.googleusercontent.com/-x-ueIx4j_48/AAAAAAAAAAI/AAAAAAAADCQ/3IpqMxyiWrQ/photo.jpg",
    //       designation: "Senior Android Developer at smartSense Consulting Solutions Pvt Ltd",
    //       description: "I am a passionate Android Developer. It is since my High School, when android just entered, that I have been immensely attracted to Android.",
    //       emailId: "thackerronak@gmail.com",
    //       fbLink: "https://www.fb.com/comeback4you",
    //       twitterLink: "https://twitter.com/thackerronak"
    //     }
    // ];
    // return {resumes};
    let resumes = [
      {
        about: [{
          id: 1,
          name: "Ronak Thacker",
          imagePath: "https://lh4.googleusercontent.com/-x-ueIx4j_48/AAAAAAAAAAI/AAAAAAAADCQ/3IpqMxyiWrQ/photo.jpg",
          designation: "Senior Android Developer at smartSense Consulting Solutions Pvt Ltd",
          description: "I am a passionate Android Developer. It is since my High School, when android just entered, that I have been immensely attracted to Android.",
          emailId: "thackerronak@gmail.com",
          fbLink: "https://www.fb.com/comeback4you",
          twitterLink: "https://twitter.com/thackerronak"
        }],
        contact: [{
          id: 1,
          address: "Ahmedabad",
          moNumber: "+91 8866332300",
          aboutme: "Awesome",
        }],
        resume: {
          workEx: [
            {
              id: 1,
              title: "smartSense consulting solutions Pvt.Ltd",
              description: "Titanium City Center,B-508, Road, Anand Nagar, Ahmedabad, Gujarat 380015",
              year: "2015 - 2016"
            },
            {
              id: 2,
              title: "Dynamic-Methods Enterprise Solution",
              description: "13, Shalvik Complex, Kalpna Colony,, Krupashankar Joshi Marg, Mithakhali, Navrangpura, Ahmedabad, Gujarat 380009",
              year: "2014 - 2015"
            }
          ],
          Skills: {
            software: [
              {
                id: 1,
                skillName: "Android Studio",
                skillPer: 90
              }, {
                id: 2,
                skillName: "WebStrom",
                skillPer: 90
              }, {
                id: 3,
                skillName: "Eclipse",
                skillPer: 90
              }, {
                id: 4,
                skillName: "MS OFFICE",
                skillPer: 60
              }
            ],
            programmingLanguage: [
              {
                id: 1,
                skillName: "JAVA",
                skillPer: 90
              }, {
                id: 2,
                skillName: "JavaScript",
                skillPer: 50
              }, {
                id: 3,
                skillName: "C",
                skillPer: 50
              }, {
                id: 4,
                skillName: "C++",
                skillPer: 50
              }
            ]
          },
          eduction: [
            {
              id: 1,
              title: "Department of Computer Science, KSKV Kachchh University",
              description: "Krantiguru Shyamji Krishna Verma Kachchh University Bhuj-Mundra Road, Bhuj, Gujarat 370001",
              year: "2012 - 2014"
            },
            {
              id: 2,
              title: "SRK Institute",
              description: "SRK Institute, Survey No. 128/2, Anjar-Bhuj Highway, Near Sapeda,Tal. : Anjar(Kutch).",
              year: "2009 - 2012"
            },
            {
              id: 3,
              title: "VD HighSchool",
              description: "Near Indirabai Park, Station Road, Station Road, Bhuj, Gujarat 370001",
              year: "2005 - 2009"
            }
          ]
        },
        portfolio: [
          {
            id: 1,
            imageLink: "https://lh3.googleusercontent.com/u759jsNSzeI75ZATjnkcwBN_TCtLwhvyXWqSyxI2Bvkhc5vy-4DguRA4zbanL3kRiA=w300-rw",
            playStoreLink: "https://play.google.com/store/apps/details?id=com.myclasscampus"
          },{
            id: 2,
            imageLink: "https://lh3.googleusercontent.com/qTk4yzQPO4gFAy0KR9-9m04YhmF9byP77eQbgXpQUa8uZOnrkzCRNpayWznrIZP8yfU=w300-rw",
            playStoreLink: "https://play.google.com/store/apps/details?id=com.wagespot&hl=en"
          },{
            id: 3,
            imageLink: "https://lh3.googleusercontent.com/Fs_6iZToULcn0BSCV2LMF1m0bc1eqrNqXsGCRGAvQzXLn7p0nX7rFC7ofL1qIM_hu3s=w300-rw",
            playStoreLink: "https://play.google.com/store/apps/details?id=com.smartsense.gulaboil&hl=en"
          }
        ]
      }];
    return {resumes};
  }
}
