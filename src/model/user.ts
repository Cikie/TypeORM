import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name:'user'})
export class user {
    @PrimaryGeneratedColumn()
    public readonly idU:number;
    @Column({name:"varchar"})
    public name: string;
    @Column({name:"varchar"})
    public password: string;
}