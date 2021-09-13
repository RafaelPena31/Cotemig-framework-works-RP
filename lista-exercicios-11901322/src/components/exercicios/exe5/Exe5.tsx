import { DatePicker, Space, Table } from 'antd'
import React, { useState } from 'react'
import { IDateInfo } from './Exe5Types'

export default function Exe5() {
  const [date, setDate] = useState('')

  const columns = [
    {
      title: 'Idade em anos',
      dataIndex: 'year',
      key: 'year'
    },
    {
      title: 'Idade em meses',
      dataIndex: 'month',
      key: 'month'
    },
    {
      title: 'Idade em dias',
      dataIndex: 'day',
      key: 'day'
    },
    {
      title: 'Idade em semanas',
      dataIndex: 'week',
      key: 'week'
    }
  ]

  const onGetDateInfo = (): IDateInfo[] => {
    const currentYear = new Date().getFullYear()
    const dateYear = new Date(date).getFullYear()
    const year = currentYear - dateYear

    const currentMonth = new Date().getMonth()
    const dateMonth = new Date(date).getMonth()
    const fullMonth = year * 12
    const month = dateMonth - currentMonth + fullMonth + 1

    const currentDay = new Date().getTime()
    const dateDay = new Date(date).getTime()
    const day = (currentDay - dateDay) / (1000 * 3600 * 24)

    const week = day / 7

    return [
      {
        key: '1',
        year,
        month,
        day,
        week
      }
    ]
  }

  return (
    <div className='exe'>
      <header>
        <h1>Exercício 5</h1>
        <h2>Digite uma idade para visualizarmos as informações</h2>
      </header>

      <Space direction='vertical'>
        <DatePicker onChange={(_, d) => setDate(d)} />
      </Space>

      <div className='content'>{date && <Table columns={columns} dataSource={onGetDateInfo()} />}</div>
    </div>
  )
}
