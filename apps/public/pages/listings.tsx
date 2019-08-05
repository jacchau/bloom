import { Component } from 'react';
import Layout from '../layouts/application';
import TitleHeader from '@dahlia/ui-components/src/headers/title_header';
import { Listing, ListingsList, ListingsProps } from '../components/listings_list';
import axios from 'axios';

export default class extends Component<ListingsProps> {
  static async getInitialProps () {
    let listings = [];

    try {
      const response = await axios.get('http://localhost:3001');
      listings = response.data.listings;
    } catch(error) {
      console.log(error);
    }

    return { listings }
  }

  render () {
    return (
      <Layout>
        <TitleHeader>Rent affordable housing</TitleHeader>
        <ListingsList listings={this.props.listings} />
      </Layout>
    )
  }
}
