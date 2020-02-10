import { Component, OnInit } from '@angular/core';
import { PizzadataService } from '../Pizzadata.service';
import  * as _ from 'lodash';

@Component({
  selector: 'app-pizzarank',
  templateUrl: './pizzarank.component.html',
  styleUrls: ['./pizzarank.component.css']
})
export class PizzarankComponent implements OnInit {
  PizzaOrders : any [] ;
  PizzaListing : any [] ;
  Top20 = [] ;

  constructor(private _dataService:PizzadataService) { }

  ngOnInit() {
    let self = this;

    this._dataService.getPizzaOrders()
    .subscribe(res => {
      this.PizzaOrders = _.reduce(res, function(coll, po, idx) {
        let njn = po.toppings.join(", ");
        var newRec = {
            displayval : njn,
            rank:0,
            count : 0,
            toppings:po.toppings
          }
          coll.push(newRec);
          return coll;
      }, []);

      //console.log("PizzaOrders",this.PizzaOrders);

      this.PizzaListing = _.reduce(this.PizzaOrders, function(coll, po, idx) {
        let selListing = _.find(coll, [ 'displayval', po.displayval]);
        if (selListing==null) {
          po.count=1;
          coll.push(po);
        }
        else {
          selListing.count++;
        }
        return coll;
      }, []);

      //console.log("PizzaListing",this.PizzaListing);

      //Order by count to get rank
      this.PizzaListing = _.orderBy(this.PizzaListing, ['count'],['desc']);

      //Set ranking and take the top 20
      let idx=1;
      _.forEach(this.PizzaListing, function(po){
          po.rank=idx++;
          if (idx<20)
            self.Top20.push(po);

      });

      //console.log("Top20",this.Top20);

      //reorder by name alpha for display
      this.PizzaListing = _.orderBy(this.PizzaListing, ['displayval'],['asc']);

    });

  }

}
