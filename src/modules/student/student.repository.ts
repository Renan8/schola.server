import conn from '../../infra/db/connection';
import IStudentRepository from '../../core/interfaces/repositories/istudent.repository';

class StudentRepository implements IStudentRepository {

    async findAll() : Promise<Student[] | undefined> {
        const students = await conn.select('id', 
                                           'registration_number',
                                           'name', 
                                           'cellphone', 
                                           'photo', 
                                           'birthday_date')
                                   .from<Student>('student')
                                   .catch(function(e) {
                                       return undefined;
                                   });

        return students;
    }

    async findOne(id: number) : Promise<Student | undefined> {
        const student = await conn.select('id', 
                                          'registration_number',
                                          'name', 
                                          'cellphone', 
                                          'photo', 
                                          'birthday_date')
                                   .from<Student>('student')
                                   .first()
                                   .catch(function(e) {
                                        return undefined;
                                    });

        return student;
    }

}

export default StudentRepository;