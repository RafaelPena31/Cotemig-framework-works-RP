import { Table } from 'antd'
import React, { useState } from 'react'
import DefaultButton from '../../core/DefaultButton'
import DefaultTextInput from '../../core/DefaultTextInput'
import { ClassificationType, ClassInfo, Student } from './Exe2Types'

export default function Exe2() {
  const [currentStudents, setCurrentStudents] = useState<Student[]>([])
  const [name, setName] = useState('')
  const [firstGradeValue, setFirstGradeValue] = useState('')
  const [secondGradeValue, setSecondGradeValue] = useState('')

  const studentColumns = [
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Primeira nota',
      dataIndex: 'firstGradeValue',
      key: 'firstGradeValue'
    },
    {
      title: 'Segunda nota',
      dataIndex: 'secondGradeValue',
      key: 'secondGradeValue'
    },
    {
      title: 'Média',
      dataIndex: 'average',
      key: 'average'
    },
    {
      title: 'Classificação',
      dataIndex: 'classification',
      key: 'classification'
    }
  ]

  const classColumns = [
    {
      title: 'Total de alunos aprovados',
      dataIndex: 'totalApprovedStudent',
      key: 'totalApprovedStudent'
    },
    {
      title: 'Total de alunos reprovados',
      dataIndex: 'totalDisapprovedStudent',
      key: 'totalDisapprovedStudent'
    },
    {
      title: 'Total de alunos em exame',
      dataIndex: 'totalExamStudent',
      key: 'totalExamStudent'
    },
    {
      title: 'Média da turma',
      dataIndex: 'classAverage',
      key: 'classAverage'
    }
  ]

  const onResetForm = () => {
    setName('')
    setFirstGradeValue('')
    setSecondGradeValue('')
  }

  const getStudentClassification = (average: number): ClassificationType => {
    if (average <= 3) return 'Reprovado'
    if (average > 3 && average <= 7) return 'Exame'
    return 'Aprovado'
  }

  const onAddStudent = () => {
    if (name && firstGradeValue && secondGradeValue) {
      const first = +firstGradeValue
      const second = +secondGradeValue
      const average = (first + second) / 2
      const classification: ClassificationType = getStudentClassification(average)

      const newStudent: Student = {
        key: (currentStudents.length + 1).toString(),
        name,
        firstGradeValue: first,
        secondGradeValue: second,
        average,
        classification
      }

      setCurrentStudents(state => [...state, newStudent])
      onResetForm()
    }
  }

  const getClassInfo = (): ClassInfo[] => {
    return [
      {
        totalApprovedStudent: currentStudents.filter(student => student.classification === 'Aprovado').length,
        totalDisapprovedStudent: currentStudents.filter(student => student.classification === 'Reprovado').length,
        totalExamStudent: currentStudents.filter(student => student.classification === 'Exame').length,
        classAverage:
          currentStudents.map(student => student.average).reduce((student, student2) => student + student2) / currentStudents.length
      }
    ]
  }

  return (
    <div className='exe'>
      <header>
        <h1>Exercício 2</h1>
        <h2>Verifique as notas dos alunos</h2>
      </header>

      <div>
        <DefaultTextInput placeholder='Nome do aluno' value={name} onChange={setName} />
        <DefaultTextInput placeholder='Primeira nota' type='number' value={firstGradeValue} onChange={setFirstGradeValue} />
        <DefaultTextInput placeholder='Segunda nota' type='number' value={secondGradeValue} onChange={setSecondGradeValue} />

        <DefaultButton text='Adicionar aluno' onClick={onAddStudent} />
      </div>

      <div className='content'>
        <Table columns={studentColumns} dataSource={currentStudents} />
        {currentStudents.length > 0 && <Table columns={classColumns} dataSource={getClassInfo()} />}
      </div>
    </div>
  )
}
