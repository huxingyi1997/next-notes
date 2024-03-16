import Note from '@/components/Note'
import {getNote} from '@/lib/redis';

export default async function Page({ params }: Readonly<{
  params: {
    id: string;
  };
}>) {
  const noteId = params.id;
  const note = await getNote(noteId)
  
  const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
  await sleep(5000);

  if (note == null) {
    return (
      <div className="note--empty-state">
        <span className="note-text--empty-state">
          Click a note on the left to view something! 🥺
        </span>
      </div>
    )
  }

  return <Note noteId={noteId} note={note} />
}
