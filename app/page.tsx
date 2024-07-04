import Image from "next/image";
import Header from "./header";
import Link from "next/link";

type NavTileProps = {
  title: string,
  path: string,
  description: React.ReactNode
}

function NavTile({ title, path, description }: NavTileProps) {
  return (
    <Link className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30" href={path}>
      <h2 className="mb-3 text-xl font-semibold">
        {title}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
        {description}
      </p>
    </Link>
  )
}

const HOME_LINKS: NavTileProps[] = [
  {
    title: 'MultipliCATion',
    path: 'math-vis/multiplication',
    description: 'A math visualization to help teach my daughter multiplication using 🐱 cats 🐱'
  },  
  {
    title: 'HSL Palettes',
    path: 'hsl-palettes',
    description: 'Tool for generating evenly spaced HSL values for color palettes'
  },
  {
    title: 'ToDone',
    path: 'https://github.com/wrenhawth/todone',
    description: 'Obligatory ToDo list project to practice Next.js concepts'
  },
  {
    title: 'My GitHub',
    path: 'https://github.com/wrenhawth',
    description: 'A brief profile about me in general and my programming interests in specific'
  },
]

export default function Home() {
  return (
    <>

      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">


        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          {HOME_LINKS.map((page) =>
            <NavTile
              key={page.path}
              title={page.title}
              path={page.path}
              description={page.description}
            />)
          }


          {/* <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Templates{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Explore starter templates for Next.js.
            </p>
          </a> */}


        </div>
      </main>
    </>

  );
}
