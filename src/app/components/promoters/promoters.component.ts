import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/internal/operators';
import Promoter from './promoters.model';
import { PromotersService } from './promoterService/promoters.service';

@Component({
  selector: 'app-promoters',
  templateUrl: './promoters.component.html',
  styleUrls: ['./promoters.component.css'],
})
export class PromotersComponent implements OnInit {
  promoterData?: Promoter[];
  //promoter: Promoter = new Promoter();

  constructor(private PromotersService:PromotersService) {}

  ngOnInit(): void {
    this.getPromoters();
  }

  getPromoters(): void {
    this.PromotersService.getAll()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            id: c.payload.doc.id,
            ...c.payload.doc.data(),
          }))
        )
      )
      .subscribe((data) => {
        this.promoterData = data;
      });
  }
}
