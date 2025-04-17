import Link from 'next/link'

export default function Home() {
  return (
    <div className="absolute border-solid border-4 border-blue-500">
      <ul className="list-none m-0 p-0">
        <li>
          COC Tech Club
        </li>
        <li>
          <Link href={'/about'}>About</Link>
          </li>
        <li>
          <Link href={'/members'}>Members</Link>
          </li>
        <li>
          <Link href={'/gallery'}>Gallery</Link>
          </li>
      </ul>
    </div>
  );
}
