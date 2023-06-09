import { ethers } from "ethers";
import Image from "next/image";
import Link from "next/link";

import { StarRating } from "@components/star-rating";

import { CourseCategory } from "./course-category";

import type { Course } from "@lib/courses/types";

interface CourseCardProps {
  course: Course;
  linkToPage?: boolean;
}

export const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Link
      href={`/courses/${course.id}`}
      className="rounded-box flex flex-col gap-2 bg-base-200 p-4 hover:bg-base-300"
    >
      <div className="rounded-box relative h-44 overflow-hidden">
        <Image
          src={course.description.image_url}
          fill
          alt="Course"
          priority
          className="object-cover"
        />
      </div>

      <h4 className="mt-1 block text-xl font-semibold">
        {course.description.title}
      </h4>

      <div className="mt-1 flex items-center gap-4">
        <span>
          By: <span className="font-bold">{course.seller.handle}.kl</span>
        </span>
        <span>
          Price:{" "}
          <span className="font-bold">
            {ethers.utils.formatEther(course.price)} MATIC
          </span>
        </span>
      </div>
      <StarRating rating={Number(course.rating)} />

      <p className="text-base-content/70">
        {course.description.about.substring(0, 100).concat("...")}
      </p>
      <div className="mt-1.5 flex space-x-2">
        {course.description.keywords.map((category) => (
          <CourseCategory key={category} category={category} />
        ))}
      </div>
    </Link>
  );
};
