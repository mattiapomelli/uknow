import Link from "next/link";

import { Button } from "../components/basic/button";
import { Spinner } from "../components/basic/spinner";
import { CourseCard } from "../components/course-card";
import { useCreatedCourses } from "../hooks/use-created-courses";

export const CreatedCourses = () => {
  const { data: createdCourses, isLoading } = useCreatedCourses();

  if (isLoading) {
    return (
      <div className="my-14 flex justify-center">
        <Spinner />
      </div>
    );
  }

  if (createdCourses?.length === 0)
    return (
      <div className="my-14 flex flex-col items-center gap-3">
        <p>No courses created yet</p>
        <Link href="/create">
          <a>
            <Button>Create courses</Button>
          </a>
        </Link>
      </div>
    );

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2">
      {createdCourses?.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};