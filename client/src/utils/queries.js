import gql from 'graphql-tag';

export const QUERY_BOOKS = gql`
  query savedBooks($authors: String, $description: String!, $bookId: String, $image: String, $link: String) {
    books(authors: $authors, description: $description, bookId: $bookId, image: $image, link: $link) {
        _id
        # authors
        bookId
        image
        link
        title
        description
    }
  }
`;