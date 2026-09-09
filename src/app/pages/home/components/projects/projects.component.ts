import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projectList = [
    {
      id: 1,
      title: 'Bite & Blend',
      des: 'This is a website template made for a restaurant. You can cart your item and order food from Bite & Blend.',
      thumb: 'assets/images/bite-blend.png',
      language: [{ title: 'ANGULAR-20' }, { title: 'SCSS' }],
      github_link: 'https://github.com/Joydip-Paul/Bite-and-Blend',
      site_link: 'https://biteandblend.com/',
    },
    {
      id: 2,
      title: 'Kahnapina',
      des: 'This website template made for a restaurant. You can cart your item and order food from khanapina.',
      thumb: 'assets/images/khanapina.png',
      language: [
        { title: 'ANGULAR' },
        { title: 'SCSS' },
        { title: 'BOOTSTRAP' },
      ],
      github_link: 'https://github.com/Joydip-Paul/khanapina',
      site_link: 'https://khanapina-bd.netlify.app',
    },
    {
      id: 3,
      title: 'Manate',
      des: 'This is a dashboard. Here you can find various types of elements like table, charts, modal, forms etc.',
      thumb: 'assets/images/manate.png',
      language: [
        { title: 'ANGULAR' },
        { title: 'NGZORRO' },
        { title: 'SCSS' },
        { title: 'BOOTSTRAP' },
        { title: 'APEXCHARTA' },
        { title: 'NGXCHARTS' },
      ],
      github_link: 'https://github.com/Joydip-Paul/Dashboard-CRM',
      site_link: 'https://manate-jd.netlify.app/',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  trackByProject(index: number, item: any): number {
    return item.id;
  }
}