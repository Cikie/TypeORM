import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name:'categories'})
export class Category {
    @PrimaryGeneratedColumn()
    public readonly idC:number;
    @Column({type:"varchar"})
    public type: string;
}