"use client";

import { Button, Form } from "react-bootstrap";
import { FormEvent } from "react"; //for more complicated Form should be used useForm from React

export default function SearchPageCC() {
   async function handleSubmit(e: FormEvent<HTMLFormElement>) {
      e.preventDefault();
      const formData = new FormData(e.target as HTMLFormElement); //this is necessary to use with Form from React
      const query = formData.get("query")?.toString().trim();

      if (query) {
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
      </div>
   );
}
