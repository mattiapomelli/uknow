import { useQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";

import { graphQlRequest } from "@utils/graphql-client";

import type { CourseWithLessons } from "./types";

const getCourse = gql`
  query getCourse($id: String!) {
    course(id: $id) {
      id
      createdAt
      updatedAt
      seller {
        id
        address
        handle
      }
      token {
        address
        decimals
        symbol
      }
      price
      rating
      description {
        title
        about
        image_url
        keywords
        lessons {
          title
          videoPlaybackId
          about
        }
      }
    }
  }
`;

export const useCourse = (id: string) => {
  return useQuery({
    queryKey: ["course", id],
    queryFn: async () =>
      graphQlRequest<{ course: CourseWithLessons }>(getCourse, { id }).then(
        (data) => data.course,
      ),
  });
};
