"use client";

import SongItem from "@/components/SongItem";
import useOnPlay from "@/hooks/useOnPlay";
import { Song } from "@/types";

interface PageContentProps {
  songs: Song[];
}

export default function PageContent({ songs }: PageContentProps) {
  const onPlay = useOnPlay(songs);

  if (songs.length === 0) {
    return <div className="mt-4 text-neutral-400">No song available</div>;
  }
  return (
    <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8">
      {songs?.map((song) => (
        <SongItem
          key={song.id}
          data={song}
          onClick={(id: string) => onPlay(id)}
        />
      ))}
    </div>
  );
}
