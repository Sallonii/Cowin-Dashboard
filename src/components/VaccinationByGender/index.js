import {PieChart, Pie, Legend, Cell} from 'recharts'

import './index.css'

const VaccinationByGender = props => {
  const {vaccinationByGenderList} = props
  return (
    <div className="pie-chart-container">
      <h1 className="heading">Vaccination By gender</h1>
      <PieChart height={300} width={1000}>
        <Pie
          cx="50%"
          cy="40%"
          innerRadius="40%"
          outerRadius="70%"
          startAngle={0}
          endAngle={180}
          dataKey="count"
          data={vaccinationByGenderList}
        >
          <Cell dataKey="Male" name="Male" fill="#f54394" />
          <Cell dataKey="Female" name="Female" fill="#5a8dee" />
          <Cell dataKey="Others" name="Others" fill="#2cc6c6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="middle"
          align="center"
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByGender
