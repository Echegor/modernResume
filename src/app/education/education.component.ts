import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  cards: Array<any> = [
    {
      title: 'High School',
      subtitle: 'Science Park. May, 2011',
      content: 'The place where I fell in love with computer science. Before taking AP CS in high school, I ' +
        'had no idea what I wanted to do with my life.'
    },
    // {
    //   title: 'Community College',
    //   subtitle: 'Essex County College<br>May, 2014',
    //   content: 'Accepted into the rigorous honors program. I took most of my general Ed. classes here. ' +
    //     'Graduated with a 3.9 GPA.'
    // },
    {
      title: 'College',
      subtitle: 'Rutgers University. May, 2017',
      content: 'Graduated with a bachelors in Computer Science. Suma Cum Laude. Computer Science I & II, ' +
        'Computer Architecture, Advanced Data Structures, LinuxKernel Programming, Advanced Programming in Linux,' +
        ' Operating Systems, Android Development, Database Design, Cryptography and Network Security, Design in ' +
        'Software Engineering, Programming Language Concepts.'
    },
    {
      title: 'Internship',
      subtitle: 'Wakefern Food Corp. May, 2016',
      content: 'Wrote scripts to parse files. Wrote software to generate reports. Learned proprietary technology.'
    },
    {
      title: 'College Partnership',
      subtitle: 'Wakefern Food Corp. September, 2017',
      content: 'Worked on Cashier\'s register GUI. Worked on the payment flow. Added remote access API which allowed ' +
        'for remote control integration. Helped create an android application that allows managers to manage ' +
        'their front end'
    },
    {
      title: 'LITT & Associate Programmer',
      subtitle: 'Wakefern Food Corp. May, 2017',
      content: 'As a leader in technical training, I learned the business side of programming. Gave project showcase ' +
        'in front of executive staff. Gave multiple project presentations to ShopRite members.'
    },
    {
      title: 'Programmer',
      subtitle: 'Wakefern Food Corp. September, 2018',
      content: 'Currently coordinating and developing the integration of a high speed checkout lane. Worked on software integration ' +
        'into Wakefern\'s point of sale'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
