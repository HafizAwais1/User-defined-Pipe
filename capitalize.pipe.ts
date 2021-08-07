import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name:"capetalize",
})
export class capetalizepipe implements PipeTransform{
    public transform(value:any){
        const strValue=String(value);
        return strValue.charAt(0).toUpperCase()+strValue.slice(1)
    }
}
