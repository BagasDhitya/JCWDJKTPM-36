export interface EmployeeDTO {
    id?: number,
    name: string,
    email: string,
    role: 'manager' | 'staff' | 'director',
    salary: number,
    created_at?: Date,
    updated_at?: Date | null,
    deleted_at?: Date | null
}