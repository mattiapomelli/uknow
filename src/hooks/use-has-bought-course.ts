import { useAccount, useQuery } from "wagmi";

import { useKnowledgeLayerCourse } from "@hooks/use-knowledgelayer-course";

export const useHasBoughtCourse = (courseId: number) => {
  const { address } = useAccount();
  const knowledgeLayerCourse = useKnowledgeLayerCourse();

  return useQuery(["has-bought-course", courseId, address], async () => {
    if (!knowledgeLayerCourse || !address) return false;

    const eventFilter = knowledgeLayerCourse.filters.CourseBought(
      courseId,
      address,
    );
    const events = await knowledgeLayerCourse.queryFilter(eventFilter);

    if (events.length > 0) return true;

    return false;
  });
};
