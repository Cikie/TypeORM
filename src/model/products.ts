import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name:'products'})
export class Products {
    @PrimaryGeneratedColumn()
    readonly id: number;
    @Column({type: "double"})
    price: number;
    @Column({type: "varchar"})
    name: string;
    @Column({type: "varchar"})
    description: string;
    @Column({type: "int"})
    quantity: number;
    @Column({type: "varchar"})
    image: string;
}