import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { OwlService } from 'src/app/service/owl.service';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-similarproducts',
  templateUrl: './similarproducts.component.html',
  styleUrls: ['./similarproducts.component.css']
})
export class SimilarproductsComponent implements OnInit {
  similarProducts:any;
  constructor(private activatedRoute:ActivatedRoute,private owlService:OwlService, private router:Router) { 
    this.similarProducts = activatedRoute.snapshot.data['similarProducts']
  }
  
  ngOnInit(): void {

  }
  customOptions: OwlOptions = this.owlService.owlOption;

  navigateProductdetails(id:any)
  {
    this.router.navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate(['/home/product/' + id]));
    // this.router.navigate(['./', id], { relativeTo: this.activatedRoute.parent });
  }

}
