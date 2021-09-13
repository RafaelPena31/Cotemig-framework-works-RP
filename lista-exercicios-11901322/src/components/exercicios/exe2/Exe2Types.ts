export type ClassificationType = 'Reprovado' | 'Exame' | 'Aprovado'

export interface Student {
  key: string
  name: string
  firstGradeValue: number
  secondGradeValue: number
  average: number
  classification: ClassificationType
}

export interface ClassInfo {
  totalApprovedStudent: number
  totalDisapprovedStudent: number
  totalExamStudent: number
  classAverage: number
}
