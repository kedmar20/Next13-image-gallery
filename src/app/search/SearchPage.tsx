"use client";

import { Button, Form } from "react-bootstrap";
import { FormEvent, useState } from "react"; //for more complicated Form should be used useForm from React

export default function SearchPageCC() {
   const [searchResults, setSearchResults] = useState<UnsplashImage[] | null>(null);
   const [searchResultsLoading, setSearchResultsLoading] = useState(false);
   const [searchResultsLoadingIsError, setSearchResultsLoadingIsError] = useState(false);

   async function handleSubmit(e: FormEvent<HTMLFormElement>) {
      e.preventDefault();
      const formData = new FormData(e.target as HTMLFormElement); //this is necessary to use with Form from React
      const query = formData.get("query")?.toString().trim();

       if (query) {
            try {
                setSearchResults(null);
                setSearchResultsLoadingIsError(false);
                setSearchResultsLoading(true);
                const response = await fetch("/api/search?query=" + query);
                const images: UnsplashImage[] = await response.json();
                setSearchResults(images);
            } catch (error) {
                console.error(error);
                setSearchResultsLoadingIsError(true);
            } finally {
                setSearchResultsLoading(false);
            }
        
   }

   return (
      <div>
         <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="search-input">
               <Form.Label>Search query</Form.Label>
               <Form.Control name="query" placeholder="write somethink to search..." />
            </Form.Group>
            <Button type="submit" className="mb-3">
               SEARCH
            </Button>
         </Form>

          <div className="d-flex flex-column align-items-center">
                {searchResultsLoading && <Spinner animation="border" />}
                {searchResultsLoadingIsError && <p>Something went wrong. Please try again.</p>}
                {searchResults?.length === 0 && <p>Nothing found. Try a different query!</p>}
            </div>
      </div>
   );
}
