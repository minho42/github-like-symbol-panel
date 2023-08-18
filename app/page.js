import Editor from "./Editor";

export default function Home() {
  // flex min-h-screen flex-col items-center justify-between p-24
  // flex flex-col items-center p-4
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-3">
      <div className="font-bold py-3">GitHub like Symbol panel</div>
      <Editor />
      <a href="https://twitter.com/minho42_" target="_blank" rel="nofollow me">
        <div className="fixed right-0 bottom-0 text-black bg-blue-100 font-semibold  no-underline text-sm px-3 py-1 rounded-tl-xl">
          @minho42_
        </div>
      </a>
    </main>
  );
}
