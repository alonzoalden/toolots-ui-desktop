import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../shared/classes/product';
declare var $: any;

@Component({
  selector: 'toolots-app-product-tab-thirteen',
  templateUrl: './product-tab.component.html',
  styleUrls: ['./product-tab.component.scss']
})
export class ToolotsProductTabThirteenComponent implements OnInit {
  
  // Get product Using Input
  @Input() products: Product;

  constructor() { }

  ngOnInit() {
     // tab js
      $("#tab-1").css("display", "Block");
    $(".default").css("display", "Block");
    $(".tabs li a").on('click', function() {
      event.preventDefault();
      $(this).parent().parent().find("li").removeClass("current");
      $(this).parent().addClass("current");
      var currunt_href = $(this).attr("href");
      $('#' + currunt_href).show();
      $(this).parent().parent().parent().find(".tab-content").not('#' + currunt_href).css("display", "none");
    });
  }

  // Slick slider config
  public productSlideConfig: any = {
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

}
