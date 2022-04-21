import { NotifyService } from 'src/app/services/notify.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Subscription } from 'rxjs';
import { GeneratorService } from 'src/app/services/generator.service';







//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! do i supppose to use ngModel 
@Component({
  selector: 'app-random-range',
  templateUrl: './random-range.component.html',
  styleUrls: ['./random-range.component.css']
})
export class RandomRangeComponent implements OnDestroy {
  private subscription: Subscription
  private subscription2: Subscription
  private subscription3: Subscription
  arr: number[] = []
  arr2: number[] = []
  arr3: number[] = []

  constructor(private generator: GeneratorService, private notifyService: NotifyService) { }
  
start() {
  this.subscription = this.generator.generate(5,15).subscribe({
    next: (num: number) => this.arr.push(num),
    error: (error: any) => this.notifyService.error(error),
    complete: () => this.notifyService.success('Observable Completed :-)')
  })
}
 
showEven(e: any):void {
  console.log(e.target);
  console.log(e.target.checked);
  console.log(e);
  
  if (e.target.checked) {
  this.subscription2 = this.generator.generate(5,15).pipe(filter(n => n % 2 === 0)).subscribe({
    next: (num: number) => this.arr2.push(num),
    error: (error: any) => this.notifyService.error(error),
    complete: () => this.notifyService.success('Only evens completed')

  })
} else {
  this.subscription2.unsubscribe()
}
}
//EVENT doesnt work סוג only any doesnt exist type checked wtf???
showPowers(e: any):void {
  if (e.target.checked) {
  this.subscription3 = this.generator.generate(5,15).pipe(map(n => n * n)).subscribe({
    next: (num: number) => this.arr3.push(num),
    error: (error: any) => this.notifyService.error(error),
    complete: () => this.notifyService.success('חזקות ריבועיות סיים')

  })
} else {
  this.subscription3.unsubscribe()
}
}

test(isChecked: any):void {
  console.log(isChecked.checked)
}
  

  stop() {
    if (this.subscription) {
      this.subscription.unsubscribe()
      this.subscription2.unsubscribe()
      this.subscription3.unsubscribe()
      this.notifyService.success('Observable Stopped :-)')
    }
  }


  ngOnDestroy(): void {
    if (this.subscription || this.subscription2 || this.subscription3) {
      this.subscription.unsubscribe()
      this.subscription2.unsubscribe()
      this.subscription3.unsubscribe()
    }
  }

}


// if you click first then second one : 
// Cannot read properties of undefined (reading 'unsubscribe')