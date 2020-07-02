import { Component, OnInit } from '@angular/core';
import { Leader } from '../shared/leader'
import { LeadersService } from '../services/leaders.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  leaders: Leader[];
  constructor(private leaderService: LeadersService) { }

  ngOnInit() {
    this.leaderService.getLeaders().subscribe(leaders => this.leaders = leaders);
  }

}
