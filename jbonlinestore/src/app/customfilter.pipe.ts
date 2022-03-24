import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customfilter'
})
export class CustomfilterPipe implements PipeTransform {
  detail_List:Array<any>=[];

  transform(value:Array<any>, value2:string, ...args: unknown[]){
    this.detail_List= value;
   

    return this.detail_List.filter((ele)=>{
        if(ele.name.includes(value2))
        {
          return ele;
        }
    })
  }

}
