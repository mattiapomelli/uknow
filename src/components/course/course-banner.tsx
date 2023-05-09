import { ethers } from "ethers";
import { useRouter } from "next/router";

import { Address } from "@components/address";
import { Button } from "@components/basic/button";
import { useBuyCourse } from "@lib/courses/use-buy-course";
import { useHasBoughtCourse } from "@lib/courses/use-has-bought-course";

import type { CourseWithLessons } from "types/tmp";

export const CourseBanner = ({ course }: { course: CourseWithLessons }) => {
  const router = useRouter();
  const { data: hasBoughtCourse } = useHasBoughtCourse(course.id);
  const { mutate: buyCourse, isLoading } = useBuyCourse({
    onSuccess() {
      router.push(`/dashboard`);
    },
  });

  const { title, description, seller } = course;

  const onBuyCourse = async () => {
    buyCourse({
      id: course.id,
    });
  };

  return (
    <div className="container sticky left-0 top-0 -mt-4 w-screen bg-base-100 pt-4 text-secondary-content">
      <div className="container rounded-box flex flex-wrap justify-between gap-2 bg-course-banner py-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-lg">{description.about}</p>

          {/* <div className="flex gap-1">
            {description.keywords.map((keyword, i) => (
              <span
                key={i}
                className="rounded-md bg-info px-2 py-1 text-xs text-info-content"
              >
                {keyword}
              </span>
            ))}
          </div> */}

          {/* // price and buy button */}
          <div className="flex items-center">
            <b>Price: </b>
            <span>
              {ethers.utils.formatUnits(course.price, course.token.decimals)}{" "}
              {course.token.symbol}
            </span>
          </div>
          <Button className="tracking-wider" onClick={onBuyCourse}>
            Buy course
          </Button>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className="font-semibold">Seller:</span>
            <span>{seller.handle}</span>
          </div>
          <p className="flex gap-1">
            {/* <StarRating rating={Number(seller.rating)} /> */}

            <p className="flex items-center text-sm">
              {"("}
              {seller.reviews}
              {")"}
            </p>
          </p>

          <Address className="text-sm" address={seller.address} />
        </div>
      </div>
    </div>
  );
};
