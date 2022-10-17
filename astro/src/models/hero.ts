import { Capacity } from "./capacity";

export class Hero{
    id:number;
    name:string;
    roleId:number;
    description:string;
    history:string;
    difficulty:number;
    videoHeader:string;
    videoBackground:string;
    imageProfile:string;
    capacities:Capacity[];


    canDeleteed:boolean;
}