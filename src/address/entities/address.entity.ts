import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity( { name: 'address'})
export class AddressEntity {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({name: 'user_id', nullable: false})
    userId: string;

    @Column({name: 'complement', nullable: false})
    complement: string;

    @Column({name: 'number'})
    numberAddress: string;

    @Column({name: 'cep', nullable: true})
    cep: string;

    @Column({name: 'city_id', nullable: false})
    cityId: string;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    updateddAt: Date;
}