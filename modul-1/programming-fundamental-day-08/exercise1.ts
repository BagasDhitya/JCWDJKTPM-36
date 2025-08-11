import { data } from './data/students.json'

interface Students {
    id: number,
    name: string,
    age: number,
    classCode: string
}

class StudentManagement {
    private students: Students[] = data

    public getAllStudents(): Students[] {
        return this.students
    }

    public getStudentById(id: number): Students | string {
        const result = this.students.find((student: Students) => student.id === id)
        if (result) {
            return result
        } else {
            return "ID student not found"
        }
    }

    public addStudent(student: Students) {
        this.students.push(student)
    }

    public updateStudent(id: number, updateData: Partial<Students>): string {
        const student = this.students.find((student: Students) => student.id === id)
        if (!student) {
            return "Student not found"
        }

        Object.assign(student, updateData)
        return "Student successfully updated!"
    }

    public deleteStudent(id: number, role: 'admin' | 'student'): string {
        if (role !== 'admin') {
            return "Permission denied"
        }

        const student = this.students.findIndex((student: Students) => student.id === id)
        if (student === -1) {
            return "Student not found"
        }

        this.students.splice(student, 1)
        return "Student deleted successfully"
    }
}

const studentManagement = new StudentManagement()

console.log('menampilkan semua student : ', studentManagement.getAllStudents())
console.log('mencari student dengan ID 3 : ', studentManagement.getStudentById(3))
console.log('mencari student dengan ID 6 : ', studentManagement.getStudentById(6))

console.log(' --------------------------------------- ')

// simulasi penambahan student
studentManagement.addStudent({
    id: 6,
    name: 'Budi',
    age: 28,
    classCode: 'JCWD-4504'
})

console.log('setelah ditambahkan budi : ', studentManagement.getAllStudents())
console.log(' --------------------------------------- ')

// simulasi update student
studentManagement.updateStudent(1, { age: 25 })
console.log('setelah ID 1 diupdate : ', studentManagement.getStudentById(1))

console.log(' --------------------------------------- ')
// simulasi delete student
console.log('simulasi hapus student dengan role student : ', studentManagement.deleteStudent(6, 'student')) // -> simulasi delete dengan role student
console.log('simulasi hapus student dengan role admin : ', studentManagement.deleteStudent(6, 'admin'))
console.log('setelah dihapus : ', studentManagement.getAllStudents())