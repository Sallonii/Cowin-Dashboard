import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const {vaccinationCoverage} = props
  const formattedData = number => number.toString()

  return (
    <div className="bar-chart-container">
      <h1 className="heading">Vaccination Coverage</h1>
      <BarChart
        width={800}
        height={300}
        data={vaccinationCoverage}
        margin={{
          top: 5,
        }}
      >
        <XAxis
          dataKey="vaccine_date"
          tick={{
            stroke: 'grey',
            strokeWidth: 1,
          }}
        />
        <YAxis
          tickFormatter={formattedData}
          tick={{
            stroke: 'grey',
            strokeWidth: 0,
          }}
        />
        <Legend
          wrapperStyle={{
            padding: 30,
          }}
        />
        <Bar dataKey="dose_1" name="Dose 1" fill="#5a8dee" />
        <Bar dataKey="dose_2" name="Dose 2" fill="#f54394" />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
