import { useQuery } from "wagmi";

import { fetchFromIpfs } from "@utils/ipfs";

import { useKnowledgeLayerCourse } from "./use-knowledgelayer-course";

import type { Course, CourseMetadata } from "../types/courses";

interface UseCoursesParams {
  seller?: string;
}

export const useCourses = (params?: UseCoursesParams) => {
  const { seller = null } = params ?? {};

  console.log("User: ", seller);

  const knowledgeLayerCourse = useKnowledgeLayerCourse();

  return useQuery<Course[]>(["courses", seller], async () => {
    if (!knowledgeLayerCourse) return [];

    /* Get courses */
    const courses: Omit<Course, "metadata">[] = [];
    const eventFilter = knowledgeLayerCourse.filters.CourseCreated(
      null,
      seller,
    );
    const events = await knowledgeLayerCourse.queryFilter(eventFilter);

    for (const event of events) {
      const id = event.args.courseId;
      const course = await knowledgeLayerCourse.courses(id);
      const { seller, price, dataUri } = course;

      courses.push({
        id: id.toNumber(),
        price,
        seller: seller as `0x${string}`,
        dataUri,
      });
    }

    /* Get courses metadata */
    const coursesMetadata = await Promise.all(
      courses.map((course) => fetchFromIpfs<CourseMetadata>(course.dataUri)),
    );

    const coursesWithMetadata: Course[] = courses.map((course, index) => ({
      ...course,
      metadata: coursesMetadata[index],
    }));

    return coursesWithMetadata;
  });
};
