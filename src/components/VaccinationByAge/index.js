import {PieChart, Pie, Legend, Cell} from 'recharts'

import './index.css'

const VaccinationByAge = props => {
  const {vaccinationByAgeList} = props

  console.log(vaccinationByAgeList)

  return (
    <div className="filled-pie-chart-container">
      <h1 className="heading">Vaccination By Age</h1>
      <PieChart height={200} width={1000}>
        <Pie
          cx="50%"
          cy="50%"
          innerRadius="0%"
          outerRadius="70%"
          startAngle={0}
          endAngle={360}
          dataKey="count"
          data={vaccinationByAgeList}
        >
          <Cell dataKey="18-44" name="18-44" fill="#2d87bb" />
          <Cell dataKey="45-60" name="45-60" fill="#a3df9f" />
          <Cell dataKey="Above 60" name="Above 60" fill="#64c2a6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByAge
