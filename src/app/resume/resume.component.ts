import { Component, OnInit } from '@angular/core';
import { AppCacheService } from '../services/app-cache.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  public get name() {
    return this.cache.username;
  }

  constructor(private cache: AppCacheService) { }

  ngOnInit(): void {
  }

  public openLinkedIn() {
    window.open('https://www.linkedin.com/in/colbybenway/', '_blank');
  }

}
