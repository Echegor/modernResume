import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {Breakpoints, BreakpointState, BreakpointObserver} from '@angular/cdk/layout';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  // languages: string[] = [
  //   'C++', 'C', 'Java', 'Bash', 'Batch', 'PHP', 'Python', 'JavaScript', 'SQL', 'Groovy','TypeScript'
  // ];
  //
  // technologies: string[] =[
  //   'Android', 'Spring', 'CSS', 'XML', 'HTML', 'Grails', 'JQuery', 'AngularJS', 'Hibernate', 'JDBC', 'SOAP',
  //   'Web Services', 'Web Sockets', 'Typescript', 'NPM', 'NodeJS'
  // ];
  //
  // buildTools: string[] =[
  //   'Gradle','Maven'
  // ];
  //
  // testingFrameworks: string[] = [
  //   'Junit','Mockito'
  // ];
  //
  // ide : string[] = [
  //   'Intellij','Eclipse','RAD'
  // ];
  //
  // sourceControl: string[] = [
  //   'Git','RTC'
  // ];

  /** Based on the screen size, switch from standard to one column per row */
  languages: string =
    'C++, C, Java, Bash, Batch, PHP, Python, JavaScript, SQL, Groovy, TypeScript'
  ;

  technologies: string =
    'Android, Spring, CSS, XML, HTML, Grails, JQuery, AngularJS, Hibernate, JDBC, SOAP, Web Services, Web Sockets, NPM, NodeJS'
  ;

  buildTools: string =
    'Gradle, Maven'
  ;

  testingFrameworks: string =
    'Junit, Mockito'
  ;

  ide: string =
    'Intellij, Eclipse, RAD'
  ;

  sourceControl: string =
    'Git, RTC'
  ;

  columns: number = 3;
  rowHeight: string = '250px';
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({matches}) => {
      if (matches) {
        setTimeout(() => {
          this.columns = 1;
          this.rowHeight = '300px';
        });

        return [
          {title: 'Languages', cols: 1, rows: 1, content: this.languages},
          {title: 'Technologies', cols: 1, rows: 1, content: this.technologies},
          {title: 'Build Tools', cols: 1, rows: 1, content: this.buildTools},
          {title: 'Source Control', cols: 1, rows: 1, content: this.sourceControl}
        ];
      }
      else{
        setTimeout(() => {
          this.columns = 3;
          this.rowHeight = '250px';
        });

        return [
          {title: 'Languages', cols: 3, rows: 1, content: this.languages},
          {title: 'Technologies', cols: 1, rows: 1, content: this.technologies},
          {title: 'Build Tools', cols: 1, rows: 1, content: this.buildTools},
          {title: 'Source Control', cols: 1, rows: 1, content: this.sourceControl}
        ];
      }

    })
  );

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
  }


}
