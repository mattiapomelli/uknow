import { Player } from "@livepeer/react";
import { useAccount } from "wagmi";

import { CHAIN } from "@constants/chains";

interface LessonPlayerProps {
  videoPlaybackId: string;
  courseId: string;
  className?: string;
}

export const LessonPlayer = ({
  courseId,
  videoPlaybackId,
  className,
}: LessonPlayerProps) => {
  // const session = useSession();
  const { address } = useAccount();

  return (
    <div className={className}>
      <Player
        playbackId={videoPlaybackId}
        accessKey={JSON.stringify({
          address,
          chainId: CHAIN.id,
          courseId,
        })}
      />
    </div>
  );
};
