import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
} from 'react-bootstrap';

class SearchRecipes extends Component {
  constructor() {
    super();
    this.state = {
      ingredients: '',
      dish: '',
    };
  }
  search() {
    let { ingredients, dish } = this.state;
    const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;
    console.log('state', this.state, url);
    fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((json) => console.log('recipes', json));
  }
  render() {
    return (
      <Form inline>
        <FormGroup>
          <FormLabel>Ingredients</FormLabel>
          <FormControl
            type='text'
            placeholder='garlic, chicken'
            onChange={(event) =>
              this.setState({ ingredients: event.target.value })
            }
          ></FormControl>
        </FormGroup>
        {''}
        <FormGroup>
          <FormLabel>Dish</FormLabel>
          <FormControl
            type='text'
            placeholder='adobo'
            onChange={(event) => this.setState({ dish: event.target.value })}
          ></FormControl>
        </FormGroup>
        <Button onClick={() => this.search()}>Submit</Button>
      </Form>
    );
  }
}

export default SearchRecipes;
