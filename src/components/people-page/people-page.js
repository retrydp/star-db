import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import ErrorIndicator from "../error-indicator";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import Row from "../row";
import "./people-page.css";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();
  state = { selectedPerson: null };
  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
      hasError: false,
    });
  };
  componentDidCatch() {
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) return <ErrorIndicator />;
    const itemList = <ItemList onItemSelected={this.onPersonSelected} getData={this.swapiService.getAllPeople} renderItem={({ name, gender, birthYear }) => `${name} (${gender},  ${birthYear})`} />;
    const personDetails = <PersonDetails personId={this.state.selectedPerson} />;
    return <Row left={itemList} rigth={personDetails} />;
  }
}
