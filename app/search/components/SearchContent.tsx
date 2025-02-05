"use client";

import LikeButton from "@/components/LikeButton";
import MediaItem from "@/components/MediaItem";
import useOnPlay from "@/hooks/useOnPlay";
import { Song } from "@/types";

interface SearchContentProps {
  songs: Song[];
}

export default function SearchContent({ songs }: SearchContentProps) {
  const onPlay = useOnPlay(songs);

  if (songs.length === 0) {
    return (
      <div className="w-full space-y-2 px-6 text-neutral-400">
        No songs found.
      </div>
    );
  }

  return (
    <div className="w-full space-y-2 px-6">
      {songs.map((song) => (
        <div key={song.id} className="flex w-full items-center gap-x-4">
          <div className="flex-1">
            <MediaItem data={song} onClick={(id: string) => onPlay(id)} />
          </div>
          <LikeButton songId={song.id} />
        </div>
      ))}
    </div>
  );
}
