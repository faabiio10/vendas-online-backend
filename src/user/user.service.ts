import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dtos/createUser.dto';
import { UserEntity } from './interfaces/user.entity';
import { hash } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ){}

    async createUser(createUserDTO: CreateUserDTO): Promise<UserEntity> {
        const saltOrRounds = 10;
        const passwordHashed = await hash(createUserDTO.password, saltOrRounds);

        return this.userRepository.save({
            ...createUserDTO,
            typeUser: 1,
            password: passwordHashed,

        });
    }

    async getAllUser(): Promise<UserEntity[]>{
        return this.userRepository.find();
    }

}
