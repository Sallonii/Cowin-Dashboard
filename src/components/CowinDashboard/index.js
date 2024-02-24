import {Component} from 'react'

import Loader from 'react-loader-spinner'

import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

import './index.css'

const cowinStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN PROGRESS',
  failure: 'FAILURE',
}

class CowinDashboard extends Component {
  state = {vaccinationDetailsList: [], cowinStatus: cowinStatusConstant.initial}

  componentDidMount() {
    this.getVaccinationDetails()
  }

  getVaccinationDetails = async () => {
    this.setState({cowinStatus: cowinStatusConstant.inProgress})
    const apiUrl = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(apiUrl)
    if (response.ok) {
      const data = await response.json()
      const formattedData = {
        vaccinationCoverage: data.last_7_days_vaccination,
        vaccinationByAgeList: data.vaccination_by_age,
        vaccinationByGenderList: data.vaccination_by_gender,
      }
      this.setState({
        vaccinationDetailsList: formattedData,
        cowinStatus: cowinStatusConstant.success,
      })
    } else {
      this.setState({cowinStatus: cowinStatusConstant.failure})
    }
  }

  logoContainer = () => (
    <>
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
          alt="website logo"
          className="website-logo"
        />
        <p className="website-name">Co-WIN</p>
      </div>
      <h1 className="website-heading">CoWIN Vaccination in India</h1>
    </>
  )

  renderAnalysis = () => {
    const {vaccinationDetailsList} = this.state
    const {
      vaccinationCoverage,
      vaccinationByAgeList,
      vaccinationByGenderList,
    } = vaccinationDetailsList
    return (
      <div className="bg">
        <div className="card-container">
          {this.logoContainer()}
          <VaccinationCoverage vaccinationCoverage={vaccinationCoverage} />
          <VaccinationByGender
            vaccinationByGenderList={vaccinationByGenderList}
          />
          <VaccinationByAge vaccinationByAgeList={vaccinationByAgeList} />
        </div>
      </div>
    )
  }

  renderFailure = () => (
    <div className="bg">
      <div className="card-container">
        {this.logoContainer()}
        <div className="failure-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
            alt="failure view"
          />
          <h1>Something went wrong</h1>
        </div>
      </div>
    </div>
  )

  renderLoader = () => (
    <div className="bg">
      <div className="card-container">
        {this.logoContainer()}
        <div data-testid="loader" className="loader">
          <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
        </div>
      </div>
    </div>
  )

  render() {
    const {cowinStatus} = this.state

    switch (cowinStatus) {
      case cowinStatusConstant.success:
        return this.renderAnalysis()
      case cowinStatusConstant.failure:
        return this.renderFailure()
      case cowinStatusConstant.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }
}

export default CowinDashboard
