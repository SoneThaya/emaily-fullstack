import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys, deleteSurveys } from "../../actions";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  handleDeleteSurvey(id) {
    this.props.deleteSurveys(id);
  }

  renderSurveys() {
    return this.props.surveys.reverse().map((survey) => {
      console.log(survey);
      return (
        <div className="card blue-grey darken-1" key={survey._id}>
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a>Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
            <a
              className="btn orange darken-2"
              onClick={() => this.handleDeleteSurvey(survey._id)}
            >
              Delete
            </a>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys, deleteSurveys })(SurveyList);
